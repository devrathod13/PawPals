import mongoose from 'mongoose';

// Define the Mongoose schema for Adoption Applications
const AdoptionApplicationSchema = new mongoose.Schema({
  // Pet Information
  petId: {
    type: String,
    required: true
  },
  petName: {
    type: String,
    required: true
  },

  // Personal Information
  personalInfo: {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    phone: {
      type: String,
      required: true,
      trim: true
    }
  },

  // Home Information
  homeInfo: {
    address: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    zipCode: {
      type: String,
      required: true,
      trim: true
    },
    homeType: {
      type: String,
      enum: ['house', 'apartment', 'condo', 'other'],
      required: true
    },
    hasYard: {
      type: Boolean,
      default: false
    },
    yardSize: {
      type: String,
      enum: ['small', 'medium', 'large'],
      required: function() { return this.homeInfo.hasYard; }
    }
  },

  // Pet History
  petHistory: {
    hasOtherPets: {
      type: Boolean,
      default: false
    },
    otherPetDetails: {
      type: String,
      trim: true
    },
    previousPetExperience: {
      type: String,
      trim: true
    }
  },

  // Employment Information
  employmentInfo: {
    employmentStatus: {
      type: String,
      enum: ['employed', 'unemployed', 'student', 'retired'],
      required: true
    },
    workSchedule: {
      type: String,
      enum: ['fullTime', 'partTime', 'workFromHome', 'flexibleSchedule']
    }
  },

  // Additional Information
  additionalInfo: {
    reasonForAdoption: {
      type: String,
      required: true,
      trim: true
    },
    emergencyContactName: {
      type: String,
      trim: true
    },
    emergencyContactPhone: {
      type: String,
      trim: true
    }
  },

  // Metadata
  submissionDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'approved', 'rejected'],
    default: 'pending'
  },

  // Optional: User Reference (if you implement user authentication)
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,  // Adds createdAt and updatedAt fields
  collection: 'adoptionApplications'
});

// Create indexes for faster querying
AdoptionApplicationSchema.index({ 
  'personalInfo.email': 1, 
  'petId': 1, 
  'submissionDate': -1 
});

// Compile the model
const AdoptionApplication = mongoose.models.AdoptionApplication || 
  mongoose.model('AdoptionApplication', AdoptionApplicationSchema);

export default AdoptionApplication;
