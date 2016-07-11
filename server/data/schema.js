// /* eslint-disable no-unused-vars, no-use-before-define */
// import mongoose from 'mongoose';
// import config from '../config/environment';
//
// import {
//   GraphQLBoolean,
//   GraphQLFloat,
//   GraphQLID,
//   GraphQLInt,
//   GraphQLList,
//   GraphQLNonNull,
//   GraphQLObjectType,
//   GraphQLSchema,
//   GraphQLString
// } from 'graphql';
//
// import {
//   connectionArgs,
//   connectionDefinitions,
//   connectionFromArray,
//   fromGlobalId,
//   globalIdField,
//   mutationWithClientMutationId,
//   nodeDefinitions
// } from 'graphql-relay';
//
// import {
//   Word
//   // Feature,
//   // getUser,
//   // getFeature,
//   // getFeatures
// } from './database';
//
// mongoose.connect(config.mongodb.url);
// /**
//  * We get the node interface and field from the Relay library.
//  *
//  * The first method defines the way we resolve an ID to its object.
//  * The second defines the way we resolve an object to its GraphQL type.
//  */
// const { nodeInterface, nodeField } = nodeDefinitions(
//   (globalId) => {
//     const { type, id } = fromGlobalId(globalId);
//     if (type === 'Word') {
//       return getWord(id);
//     } // else if (type === 'Feature') {
//     //   return getFeature(id);
//     // }
//     return null;
//   },
//   (obj) => {
//     if (obj instanceof Word) {
//       return wordType;
//     } // else if (obj instanceof Feature) {
//     //   return featureType;
//     // }
//     return null;
//   }
// );
//
// // /**
// //  * Define your own types here
// //  */
//
// const wordType = new GraphQLObjectType({
//   name: 'Word',
//   description: 'A word',
//   fields: () => ({
//     id: globalIdField('User'),
//     features: {
//       type: featureConnection,
//       description: 'Features that I have',
//       args: connectionArgs,
//       resolve: (_, args) => connectionFromArray(getFeatures(), args)
//     },
//     username: {
//       type: GraphQLString,
//       description: 'Users\'s username'
//     },
//     website: {
//       type: GraphQLString,
//       description: 'User\'s website'
//     }
//   }),
//   interfaces: [nodeInterface]
// });
//
// // const featureType = new GraphQLObjectType({
// //   name: 'Feature',
// //   description: 'Feature integrated in our starter kit',
// //   fields: () => ({
// //     id: globalIdField('Feature'),
// //     name: {
// //       type: GraphQLString,
// //       description: 'Name of the feature'
// //     },
// //     description: {
// //       type: GraphQLString,
// //       description: 'Description of the feature'
// //     },
// //     url: {
// //       type: GraphQLString,
// //       description: 'Url of the feature'
// //     }
// //   }),
// //   interfaces: [nodeInterface]
// // });
// //
// /**
//  * Define your own connection types here
//  */
// // const { connectionType: featureConnection } = connectionDefinitions({ name: 'Feature', nodeType: featureType });
//
// /**
//  * This is the type that will be the root of our query,
//  * and the entry point into our schema.
//  */
// const queryType = new GraphQLObjectType({
//   name: 'Query',
//   fields: () => ({
//     node: nodeField,
//     // Add your own root fields here
//     viewer: {
//       type: userType,
//       resolve: () => getUser('1')
//     }
//   })
// });
//
// /**
//  * This is the type that will be the root of our mutations,
//  * and the entry point into performing writes in our schema.
//  */
// const mutationType = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: () => ({
//     // Add your own mutations here
//   })
// });
//
// /**
//  * Finally, we construct our schema (whose starting query type is the query
//  * type we defined above) and export it.
//  */
// export default new GraphQLSchema({
//   query: queryType
//   // Uncomment the following after adding some mutation fields:
//   // mutation: mutationType
// });
