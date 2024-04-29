import { Schema, model } from "mongoose";

interface IGenreSchema {
    name: string;
    movies: string[]
}

const genreSchema = new  Schema<IGenreSchema>({
    name: { 
        type : String, 
        required : true 
    },  
    movies: [{
        type : Schema.Types.ObjectId , ref : "Movie"
    }]
});

const GenreModel = model<IGenreSchema>("Genre", genreSchema)

export default GenreModel;