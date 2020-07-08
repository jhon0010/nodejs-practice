import express,{Application, Request, Response, NextFunction} from 'express'
import dotenv from "dotenv";
import {PubSub} from "@google-cloud/pubsub";

// initialize configuration
dotenv.config();

const topicName:string = 'projects/pub-sub-test-282116/topics/land-lords';//'land-lords';
const projectId:string = 'pub-sub-test-282116';

const port = process.env.SERVER_PORT;
const app: Application = express();
const pubSubClient = new PubSub();

const add = (a:number, b:number) : number => a + b;

async function createTopic(){
    const pubSub = new PubSub({projectId});
    const [topic] = await pubSub.createTopic(topicName);
    console.log(`Topic ${topic.name} created.`)
}


async function publishMessage() {

    const dataBuffer = Buffer.from("test");

    const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
    console.log(`Message ${messageId} published.`);
  }


app.get('/', (req: Request, res: Response, next: NextFunction) => {

    publishMessage();
    console.log(add(5,5));
    res.send('Hello');
});

app.listen(port, () => console.log(`Server running in http://localhost:${port}`));