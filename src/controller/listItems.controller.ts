import { Request, Response } from "express";

export class ListAllItems{
    public async listAll(req: Request, res: Response){
        return res.json('asd')
    }
}