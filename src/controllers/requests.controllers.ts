import {Request, Response} from 'express';

export const publicRequest = async (req: Request, res: Response) => {
    res.send({message: "Public Request"})
}


export const protectedRequest = async (req: Request, res: Response) => {
    res.send({message: "Protected Request"})
}
