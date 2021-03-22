import mongoose from 'mongoose';

const BreedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  }
);

const GenderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  }
);

const ShelterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  }
);

const LocationSchema = new mongoose.Schema(
  {
    lat: {
      type: String,
      required: true
    },
    lng: {
      type: String,
      required: true
    }
  }
);

const ImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true
    },
    isMain: Boolean
  }
);

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    breed: {
      type: BreedSchema,
      required: true
    },
    type: {
      type: PetTypeSchema,
      required: true
    },
    birth_date: {
      type: Date,
      required: true
    },
    location: {
      type: LocationSchema,
      required: true
    },
    images: {
      type: [ImageSchema],
      required: true,
    },
    gender: {
      type: GenderSchema,
      required: true,
    },
    description: String,
    shelter: {
      type: ShelterSchema,
      required: true,
    },
    neutered: {
      type: Boolean,
      required: true,
    },
    comments: [String]
  }
);

export default mongoose.model('Pet', PetSchema);
