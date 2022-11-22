import { Router, Request, Response } from 'express';

class UserController {
    path: string = '/user';
    router: Router;

    constructor() {
        this.router = Router();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get(this.path, this.getAllUsers);
        this.router.get(`${this.path}/:id`, this.getUserById);
        // this.router.post(this.path, this.createUser);
        // this.router.put(`${this.path}/:id`, this.updateUser);
        // this.router.delete(`${this.path}/:id`, this.deleteUser);
    }
    getUserById(req: Request, res: Response) {
        res.send('Method not implemented. Get user by id');
    }
    getAllUsers(req: Request, res: Response) {
        res.send('Get all users');
    }
}
export default UserController;
