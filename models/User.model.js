const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    password: String,
    email: String,
    description: String,
    location: String,
    imageUrl: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  },

  { events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    }, 
  ],
}


);

const User = model("User", userSchema);

module.exports = User;
