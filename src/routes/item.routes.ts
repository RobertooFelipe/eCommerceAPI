import { Router  } from "express";
import { CreateItem } from "../controller/createItems.controller";

const createItem = new CreateItem;

export const route = Router()

route.get('./listItems',);
route.get('./findItem/:id',);
route.post('/createItem',createItem.Create);
route.put('./alterItem/:id',);
route.delete('./deleteItem/:id',);
