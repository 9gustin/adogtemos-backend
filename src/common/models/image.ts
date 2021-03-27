import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema(
    {
      url: {
        type: String,
        required: true
      },
      isMain: Boolean
    }
);

export default mongoose.model('Image', ImageSchema);
