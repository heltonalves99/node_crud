import { Router } from "express";

import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoryController } from "./controllers/GetAllCategoryController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

import { CreateVideoController } from "./controllers/CreateVideoController";
import { GetAllVideoController } from "./controllers/GetAllVideoController";

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoryController().handle);
routes.put('/categories/:id', new UpdateCategoryController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);

routes.post('/videos', new CreateVideoController().handle);
routes.get('/videos', new GetAllVideoController().handle);

export { routes };
