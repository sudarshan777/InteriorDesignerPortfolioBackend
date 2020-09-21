const User = require("../models/user");
const Kitchen = require("../models/kitchen");
const Bathroom = require("../models/bathroom");
const Bedroom = require("../models/bedroom");
const LivingArea = require("../models/livingArea");
const Testimonial = require("../models/testimonials");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const KitchenType = new GraphQLObjectType({
  name: "Kitchen",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
  }),
});
const BathroomType = new GraphQLObjectType({
  name: "Bathroom",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
  }),
});
const BedroomType = new GraphQLObjectType({
  name: "Bedroom",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
  }),
});
const LivingAreaType = new GraphQLObjectType({
  name: "LivingArea",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    pictureUrl: { type: GraphQLString },
  }),
});

const TestimonialType = new GraphQLObjectType({
  name: "Testimonial",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    project: { type: GraphQLString },
    comment: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get from db/other source
        return User.findById(args.id);
      },
    },

    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        // return books;
        return User.find({});
      },
    },
    kitchens: {
      type: new GraphQLList(KitchenType),
      resolve(parent, args) {
        return Kitchen.find({});
      },
    },
    bathrooms: {
      type: new GraphQLList(BathroomType),
      resolve(parent, args) {
        return Bathroom.find({});
      },
    },
    bedrooms: {
      type: new GraphQLList(BedroomType),
      resolve(parent, args) {
        return Bedroom.find({});
      },
    },
    livingAreas: {
      type: new GraphQLList(LivingAreaType),
      resolve(parent, args) {
        return LivingArea.find({});
      },
    },
    testimonials: {
      type: new GraphQLList(TestimonialType),
      resolve(parent, args) {
        return Testimonial.find({});
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let user = new User({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        try {
          return user.save();
        } catch (e) {
          console.log(e);
        }
      },
    },
    addKitchen: {
      type: KitchenType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        pictureUrl: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let kitchen = new Kitchen({
          name: args.name,
          description: args.description,
          pictureUrl: `http://localhost:4000/images/kitchen/${args.pictureUrl}`,
        });
        try {
          return kitchen.save();
        } catch (e) {
          console.log(e);
        }
      },
    },
    addBathroom: {
      type: BathroomType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        pictureUrl: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let bathroom = new Bathroom({
          name: args.name,
          description: args.description,
          pictureUrl: `http://localhost:4000/images/bathroom/${args.pictureUrl}`,
        });
        try {
          return bathroom.save();
        } catch (e) {
          console.log(e);
        }
      },
    },
    addBedroom: {
      type: BedroomType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        pictureUrl: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let bedroom = new Bedroom({
          name: args.name,
          description: args.description,
          pictureUrl: `http://localhost:4000/images/bedroom/${args.pictureUrl}`,
        });
        try {
          return bedroom.save();
        } catch (e) {
          console.log(e);
        }
      },
    },
    addLivingArea: {
      type: LivingAreaType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        pictureUrl: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let livingArea = new LivingArea({
          name: args.name,
          description: args.description,
          pictureUrl: `http://localhost:4000/images/livingArea/${args.pictureUrl}`,
        });
        try {
          return livingArea.save();
        } catch (e) {
          console.log(e);
        }
      },
    },
    addTestimonial: {
      type: TestimonialType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        project: { type: new GraphQLNonNull(GraphQLString) },
        comment: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let testimonial = new Testimonial({
          name: args.name,
          email: args.email,
          project: args.project,
          comment: args.comment,
        });
        try {
          return testimonial.save();
        } catch (e) {
          console.log(e);
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
