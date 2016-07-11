// import mongoose from 'mongoose';
//
// const WordSchema = new mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//     unique: true,
//     index: true,
//     default: mongoose.Types.ObjectId
//   },
//   en: String,
//   ru: Array
// });
//
// WordSchema.set('toJSON', { getters: true });
//
// const Word = mongoose.model('User', WordSchema);
//
// const getWord = (id) => {
//   return new Promise((resolve, reject) => {
//     User.findOne({id:id}).populate('hobbies friends').exec((err,res) => {
//         err ? reject(err) : resolve(res);
//     });
//   });
// }
//
// export {
//   Word,
//   getWord
// };
