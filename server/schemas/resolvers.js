// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');
const {AuthenticationError} = require("apollo-server-express")

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
        // saveBook: async function(parent, args, context) {
        //     console.log(user);
        //     try {
        //         const updatedUser = await User.findOneAndUpdate(
        //             { _id: user._id },
        //             { $addToSet: { savedBooks: body } },
        //             { new: true, runValidators: true }
        //         );
        //         return res.json(updatedUser);
        //     } catch (err) {
        //         console.log(err);
        //         return res.status(400).json(err);
        //     }
        // },
        // // remove a book from `savedBooks`
        // deleteBook: async function (parent, args, context) {
        //     const updatedUser = await User.findOneAndUpdate(
        //         { _id: user._id },
        //         { $pull: { savedBooks: { bookId: params.bookId } } },
        //         { new: true }
        //     );
        //     if (!updatedUser) {
        //         return res.status(404).json({ message: "Couldn't find user with this id!" });
        //     }
        //     return res.json(updatedUser);
        // },
    }
};


module.exports = resolvers;