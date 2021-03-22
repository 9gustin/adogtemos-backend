import Pet from './models';

class PetTypeService {
  constructor() {}
  post (data: any) {
    Pet.create(data);
  }
}

export default PetTypeService;
