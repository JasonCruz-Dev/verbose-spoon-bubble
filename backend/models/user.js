const userSchema = mongoose.Schema ({
    email: String,
},
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

const doc = await. User.Create({ email: })