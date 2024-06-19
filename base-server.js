import http from "http"

const server= http.createServer((req,res)=>{
    res.end("Hi am http. I am using to create apis")
})
const port = 8000;
server.listen(port,()=>{
    console.log("This a port",port)
})