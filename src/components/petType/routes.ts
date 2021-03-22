import PetTypeController from './controller';
import { Router } from 'express';

class PetTypeRouter {
  private instance: any;
  private controller: PetTypeController;

  constructor() {
    this.instance = Router();
    this.controller = new PetTypeController();
    this.useRoutes();
  }

  useRoutes() {
    this.instance.get('/', this.controller.get);
    this.instance.post('/', this.controller.post);
  }

  getInstance () {
    return this.instance;
  }
}

export default PetTypeRouter;
