import mongoose from "mongoose"

interface IUser {
    nome: string,
    email: string,
    password: string,
    fotoURL: string
}


const userSchema = new mongoose.Schema<IUser>({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    fotoURL: { type: String, required: true },
});

export const User = mongoose.model<IUser>("User", userSchema, "users");
