import { Request, Response } from "express";

export class DeleteItem{
    public async remove(req: Request, res: Response){
        const uuid = req.params;
        console.log(uuid)
        return res.json(`Item was removed! id:${uuid}`)
    }
}