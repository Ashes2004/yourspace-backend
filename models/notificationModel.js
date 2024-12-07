import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema( {
   user:{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
   text:{type:String},
   link:{type:String},
   postLink:{type:String},
   image:{type:String},
   isSeen:{type:Boolean , default:false},
  },
  { timestamps: true });

  export default mongoose.model('Notification', notificationSchema);