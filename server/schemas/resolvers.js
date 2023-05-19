// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require("apollo-server-express")

const resolvers = {
    Query: {
        // get a single user by either their id or their username
        getSingleUser: async function (parent, args, context) {
            const foundUser = await User.findOne({
                _id: context.user._id
            });

            if (!foundUser) {
                throw new AuthenticationError("You are not logged in!")
            }

            return (foundUser);
        },
    },
    Mutation: {
        // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
        createUser: async function (parent, args, context) {
            const user = await User.create({
                username: args.username,
                email: args.email,
                password: args.password
            });

            if (!user) {
                throw new AuthenticationError("Something is wrong")
            }
            const token = signToken(user);
            return ({ token, user });
        },
        // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
        // {body} is destructured req.body
        login: async function (parent, args, context) {
            const user = await User.findOne({ email: args.email });
            if (!user) {
                throw new AuthenticationError("Something is wrong");
            }

            const correctPw = await user.isCorrectPassword(args.password);

            if (!correctPw) {
                throw new AuthenticationError("Something is wrong")
            }
            const token = signToken(user);
            return ({ token, user });
        },
        // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
        // user comes from `req.user` created in the auth middleware function
        saveBook: async function (parent, { bookData }, context) {
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: bookData } },
                    { new: true, runValidators: true }
                );
                return updatedUser;
            } catch (err) {
                console.log(err);
                throw new AuthenticationError("Something is wrong");
            }
        },  
        // remove a book from `savedBooks`
        deleteBook: async function (parent, { bookId }, context) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
            );
            if (!updatedUser) {
                throw new AuthenticationError("Something is wrong");
            }
            return updatedUser;
        },
    }

};


module.exports = resolvers;