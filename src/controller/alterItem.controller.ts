import { Request, Response } from "express";

export class AlterItem{
    public async alter(req: Request, res: Response){
        const uuid = req.params;

        return res.json(`Item was modified! id:${uuid}`)
    }
}