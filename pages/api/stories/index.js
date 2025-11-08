import clientPromise from '../../../lib/mongodb';

export default async function handler(req,res){
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  if(req.method==='GET'){
    const stories = await db.collection('stories').find({}).toArray();
    res.status(200).json(stories);
  } else if(req.method==='POST'){
    const newStory = req.body;
    const result = await db.collection('stories').insertOne(newStory);
    res.status(201).json(result);
  } else {
    res.status(405).end();
  }
}
