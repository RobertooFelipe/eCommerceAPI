import { Request, Response } from "express";
import { randomUUID } from "crypto";

export class CreateItem{
    public async Create(req: Request ,res: Response){
        const { nameProduct, value, unit, descripiton } = req.body;
        const uuid = randomUUID();
        const date = new Date();

        const item = {
            uuid,
            nameProduct,
            value,
            unit,
            descripiton,
            date
        }

        return res.json(item)
    }
}