import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      userId?: number; // Puedes cambiar el tipo según tus necesidades
    }
  }
}
