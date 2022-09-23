import { Request, Response } from "express";

export class FindItem{
    public async list(req: Request, res: Response) {
        const uuid = req.params;
        
        return res.json(`id: ${uuid}`)
    }
}