import { Request, Response } from 'express';
import PetTypeService from './service';

class PetTypeController {
  constructor() {}
  post (req: Request, res: Response) {
    const service = new PetTypeService();
    service.post(req.body);
    res.send(req.body);
  }
  get (req: Request, res: Response) {
    res.send('Pet Types');
  }
}

export default PetTypeController;
