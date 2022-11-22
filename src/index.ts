import express from 'express';
import App from './app';
import AdminController from './controllers/admin/admiController';
import UserController from './controllers/user/userController';

const app  = new App( [
     new UserController(),
     new AdminController()  
] )
app.listen();