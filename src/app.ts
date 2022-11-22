import cors from 'cors';
import dotenv from 'dotenv' ;
import express from 'express';
import helmet from 'helmet';
import ErrorMiddleware from './middleware/error.middleware';
import  Controller  from './utils/interfaces/controller.interface';
dotenv.config()

class App{
    public express: express.Application;
    private port:number= Number(process.env.PORT) || 3000;
    constructor(controllers:Controller[]){
        this.express = express();
        this.initMiddlewares();
        this.initControllers(controllers);
        this.initErrorHandling();

    }
    private initMiddlewares():void{
        this.express.use(express.json());
        this.express.use(helmet());
        this.express.use(express.urlencoded({extended:true}));
        this.express.use(express.static('public'));
        this.express.use(cors());
        this.express.use(express.json());
    }
    private initControllers(controllers:Controller[]):void{
        controllers.forEach((controller:Controller) => {
            this.express.use('/api',controller.router);

        });
    }
    private initErrorHandling():void{
        this.express.use(ErrorMiddleware);
    }
    public listen():void{
        this.express.listen(this.port,()=>{
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
export default App;