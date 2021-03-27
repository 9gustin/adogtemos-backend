import mongoose from 'mongoose';
import Image from "../../common/models/image";

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
      type: [Image],
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
