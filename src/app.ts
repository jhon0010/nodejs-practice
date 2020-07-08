import express,{Application, Request, Response, NextFunction} from 'express'

const port:Number = 3000;

const app: Application = express();

const add = (a:number, b:number) : number => a + b; 

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    console.log(add(5,5));
    res.send('Hello');
});

app.listen(port, () => console.log(`Server running in http://localhost:${port}`));