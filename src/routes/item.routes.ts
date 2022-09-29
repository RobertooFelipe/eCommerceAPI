import { Router } from "express";
import { CreateItem } from "../controller/createItems.controller";
import { FindItem } from "../controller/findItem.controller";
import { ListAllItems } from "../controller/listItems.controller";
import { AlterItem } from "../controller/alterItem.controller";
import { DeleteItem } from "../controller/deleteItem.controller";

const createItem = new CreateItem;
const findItem = new FindItem;
const listAllItems = new ListAllItems;
const alterItem = new AlterItem;
const deleteItem = new DeleteItem;

export const route = Router()

route.get('/listItems',listAllItems.listAll);
route.get('/findItem/:id',findItem.list);
route.post('/createItem',createItem.create);
route.put('/alterItem/:id',alterItem.alter);
route.delete('/deleteItem/:id',deleteItem.remove);
