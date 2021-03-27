import mongoose from 'mongoose';
import Image from "../../common/models/image";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: Image,
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
    image: Image,
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
