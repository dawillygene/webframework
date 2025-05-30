const { MongoClient } = require("mongodb")

const url = "mongodb://venlit:venlit@127.0.0.1:27017?authSource=admin";
const dbName = "myDatabase";

async function main(){
	
	const client = new MongoClient(url);
	
	try{
		await client.connect();
		console.log("connected to the database ");
		const db = client.db(dbName);
	
		const users = await db.collection("users");
		// await users.insertOne({
		// 	name:"test user",
		// 	age:5,
		// 	profession:"boss"
		// 	})
		const allusers = await users.find().toArray();
		console.log(allusers)


		// const updated = await users.updateOne({
		// 	name:"Test user"
		// },
		// 	{$set:{age:10}})
		//
		// console.log("Updated results",updated)

		const deleted = await users.deleteOne({
			name:"Test User 1"
		})

		console.log("Deleted results",deleted)

      const findone = await users.findOne({
		  name:"Alice"
	  })

		console.log(findone)


		// const allusers1 = await users.find().toArray();
		// console.log(allusers1)
		//
		}finally{
			await client.close();
			console.log("Database connection closed")
			}
	}
	
	main();
