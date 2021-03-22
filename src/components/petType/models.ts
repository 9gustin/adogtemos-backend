import mongoose from 'mongoose';

const PetTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  }
);

export default mongoose.model('PetType', PetTypeSchema);
