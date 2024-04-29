import { Request, Response } from "express";
import prisma from "../db/client";

export const createGenres = async (req: Request, res: Response) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).send({ message: "The field name is required" });
	}
	try {
		const genre = await prisma.genre.create({
			data: {
				name: name,
			},
		});

		res.status(201).send({
			type: typeof genre,
			msg: "Genre created successfully",
			data: genre,
		});
	} catch {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

export const getAllGenres = async (req: Request, res: Response) => {
	try {
		const genres = await prisma.genre.findMany();
		res.status(200).send({
			type: "array",
			msg: "All genres",
			data: genres,
		});
	} catch {
		res.status(500).send({ message: "Internal Server Error" });
	}
};
