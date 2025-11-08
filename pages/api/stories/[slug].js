import clientPromise from '../../../lib/mongodb';

export default async function handler(req,res){
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const { slug } = req.query;
  if(req.method==='GET'){
    const story = await db.collection('stories').findOne({slug});
    if(!story) return res.status(404).json({error:'Not found'});
    res.status(200).json(story);
  } else if(req.method==='DELETE'){
    const result = await db.collection('stories').deleteOne({slug});
    res.status(200).json(result);
  } else {
    res.status(405).end();
  }
}
