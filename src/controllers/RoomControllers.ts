import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { videoRepository } from "../repositories/videoRepository";
import { subjectRepository } from "../repositories/subjectRepository";
export class RoomController {
    async create(req: Request, res: Response) {
        //criar disciplina
        const { name, description } = req.body;
        if (!name && !description)
            return res.status(400).json({ message: "O nome é obrigatorio" });

        try {
            const newRoom = roomRepository.create({ name, description });
            await roomRepository.save(newRoom);
            return res.status(201).json(newRoom);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async createVideo(req: Request, res: Response) {
        const { title, url } = req.body;
        const { idRoom } = req.params;

        try {
            const room = await roomRepository.findOneBy({ id: Number(idRoom) });
            if (!room)
                return res.status(404).json({ message: "Aula nao existe" });
            const newVideo = videoRepository.create({
                title,
                url,
                room,
            });

            await videoRepository.save(newVideo);
            return res.status(201).json(newVideo);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async roomsubject(req: Request, res: Response) {
        const { subject_id } = req.body;
        const { idRoom } = req.params;

        try {
            const room = await roomRepository.findOneBy({
                id: Number(idRoom),
            });
            if (!room)
                return res.status(404).json({ message: "Aula nao existe" });

            const subject = await subjectRepository.findOneBy({
                id: Number(subject_id),
            });

            if (!subject)
                return res
                    .status(404)
                    .json({ message: "disciplina nao existe" });

            const roomUpdate = {
                ...room,
                subjects: [subject],
            };
            await roomRepository.save(roomUpdate);

            return res.status(200).json(room);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    async list(req: Request, res: Response) {
        try {
            const rooms = await roomRepository.find({
                relations: {
                    subjects: true,
                    videos: true
                }
            });

            return res.json(rooms)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
