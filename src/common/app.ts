import cors from "cors";
import express from "express";
import Db from "./dbConfig";
import PetTypeRoutes from '../components/petType';
import bodyParser from 'body-parser';

class App {
  private instance: any;
  private db: any;
  private router: any;

  constructor () {
    this.instance = express();
    this.useMiddlewares();
    this.useDb();
    this.useRoutes();
  }

  useMiddlewares() {
    this.instance.use(cors());
    this.instance.use(bodyParser.urlencoded({ extended: true }));
    this.instance.use(bodyParser.json());
  }

  useDb () {
    this.db = new Db();
  }

  useRoutes () {
    this.instance.use('/pet_type', PetTypeRoutes);
  }

  start () {
    this.instance.listen(process.env.PORT || 3000);
    this.db.connect();
    console.log('Oki');
  }
}

export default new App();
