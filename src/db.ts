import mongoose from "mongoose";
import { Post } from "./models/post";
import { config } from "dotenv";
config();

// Operazioni CRUD
// Create
// Read
// Update
// Delete
const connectionString = process.env.MONGODB_CONNECTION_STRING!;

// Create
export const addPost = async (
    title: string,
    author: string,
    body: string,
    hidden: boolean) => {

    try {
        await mongoose.connect(connectionString, { dbName: "postagram" });

        const post = new Post();
        post.title = title;
        post.author = author;
        post.body = body;
        post.hidden = hidden;

        return await post.save();
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

// Read
export const getPosts = async () => {

    try {
        await mongoose.connect(connectionString, { dbName: "postagram" });

        return await Post.find();
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

// Update
export const updatePost = async (
    id: string,
    title: string,
    author: string,
    body: string,
    hidden: boolean) => {

    try {
        await mongoose.connect(connectionString, { dbName: "postagram" });

        const post = await Post.findById(id);

        if (!post) {
            throw new Error("Post non trovato.");
        }

        post.title = title;
        post.author = author;
        post.body = body;
        post.hidden = hidden;

        return await post.save();
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

// Delete
export const deletePost = async (id: string) => {

    try {
        await mongoose.connect(connectionString, { dbName: "postagram" });

        return await Post.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}