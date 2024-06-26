import { Request, Response } from "express";
import prisma from "../db/client";

export const createMovie = async (req: Request, res: Response) => {
    const { name, image, genres, sinopsis } = req.body;
	console.log(req.body)
    const userId = parseInt(req.params.userId);

    if (!name || !image || !sinopsis || !genres) {
        return res.status(400).send({ message: "The fields name, image, sinopsis, and genres are required" });
    }

    if (!userId) {
        return res.status(400).send({ message: "The field userId is required" });
    }  

    try {
        const newMovie = await prisma.movies.create({
            data: {
                name: name,  
                image: image,
                sinopsis: sinopsis,
                userId: userId,
            },
        });

        if (genres && genres.length) {
            await Promise.all(genres.map(async (genreId: number) => {
                await prisma.movieGenre.create({
                    data: {
                        movieId: newMovie.id,
                        genreId: genreId,
                    },
                });
            }));
        }

        res.status(201).send({
            msg: "Movie created successfully",
            data: newMovie,
        });
    } catch (error) {
        res.status(400).send(error);
    }
};  


export const getAllMovies = async (req: Request, res: Response) => {
	try {
		const allMovies = await prisma.movies.findMany();
		res.status(201).send(allMovies);
	} catch (error) {
		res.status(400).send(error);
	}
};


export const deleteMovie = async (req: Request, res: Response) => {
    const movieId = parseInt(req.params.movieId);

    if (!movieId) {
        return res.status(400).send({ message: "The field movieId is required" });
    }

    try {
        await prisma.movies.delete({
            where: { id: movieId },
        });

        res.status(200).send({ message: "Movie deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: "Error deleting movie", error });
    }
};

export const updateMovie = async (req: Request, res: Response) => {
    const movieId = parseInt(req.params.movieId);
    const { name, image, genres, sinopsis } = req.body;

    if (!movieId) {
        return res.status(400).send({ message: "The field movieId is required" });
    }

    try {
        const updatedMovie = await prisma.movies.update({
            where: { id: movieId },
            data: {
                name: name,
                image: image,
                sinopsis: sinopsis,
            },
        });

        if (genres && genres.length) {
            await prisma.movieGenre.deleteMany({
                where: { movieId: movieId },
            });

            await Promise.all(genres.map(async (genreId: number) => {
                await prisma.movieGenre.create({
                    data: {
                        movieId: movieId,
                        genreId: genreId,
                    },
                });
            }));
        }

        res.status(200).send({
            message: "Movie updated successfully",
            data: updatedMovie,
        });
    } catch (error) {
        res.status(400).send({ message: "Error updating movie", error });
    }
};
