const express = require("express")
const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        message:"Hello World!"
    })
})

const PORT = 3000;

try {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("Failed to start server:", error);
}