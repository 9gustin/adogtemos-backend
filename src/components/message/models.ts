import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    photo: String,
  }
);

const MessageSchema = new mongoose.Schema(
  {
    author: {
      type: UserSchema,
      required: true
    },
    receiver: {
        type: UserSchema,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: String,
    creation_date: {
        type: Date,
        required: true
    },
    is_readed: {
        type: Boolean,
        required: true
    }
  }
);

export default mongoose.model('Message', MessageSchema);
