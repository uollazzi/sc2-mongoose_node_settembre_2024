import mongoose from "mongoose"

interface IPost {
    title: string,
    author: string,
    body: string,
    date: Date,
    hidden: boolean
}

const postSchema = new mongoose.Schema<IPost>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now },
    hidden: { type: Boolean, default: true }
});

export const Post = mongoose.model<IPost>("Post", postSchema, "posts");
