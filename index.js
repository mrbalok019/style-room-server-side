const express =require('express');
const cors = require('cors');
const app= express();
const port =process.env.PORT || 5000;
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());


// mongodb cnctn 

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vr1clzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
  
      const productsCollection =client.db('styleroomDB').collection('products');
        
         //getting data from mongodb
         app.get('/products', async (req, res) => {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;
        
            const totalProducts = await productsCollection.countDocuments();
            const cursor = productsCollection.find().skip(skip).limit(limit);
            const products = await cursor.toArray();
        
            res.send({
                totalProducts,
                totalPages: Math.ceil(totalProducts / limit),
                currentPage: page,
                products
            });
        });
        
   
  
  
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);




app.get('/',(req,res)=>{
    res.send("style room server is running ");
 
 })
 
 app.listen(port,()=>{
     console.log("style room server on port:  ",port);
 })