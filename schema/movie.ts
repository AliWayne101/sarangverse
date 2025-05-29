import mongoose, { Model, Schema } from "mongoose";

export interface IMovieInfo {
    _id: mongoose.Types.ObjectId;
    Title: string;
    Description: string;
    Poster: string;
    ReleaseDate: Date;
    Genre: string[];
    Cast: string[];
    Rating: number;
    Duration: string;
    Trailer: string;
}

const Movie = new Schema<IMovieInfo>({
    _id: mongoose.Schema.Types.ObjectId,
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Poster: { type: String, required: true },
    ReleaseDate: { type: Date, required: true },
    Genre: { type: [String], required: true },
    Cast: { type: [String], required: true },
    Rating: { type: Number, required: true },
    Duration: { type: String, required: true },
    Trailer: { type: String, required: true }
});

let MovieModel: Model<IMovieInfo>;
try {
    MovieModel = mongoose.model<IMovieInfo>("movie");
} catch {
    MovieModel = mongoose.model<IMovieInfo>("movie", Movie, "Movies");
}

export default MovieModel;