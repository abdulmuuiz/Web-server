const http = require('http');
const port = 3000;


const server = http.createServer((req,res) => {

})

server.listen(port, (error) => {
    if(error) {
    console.log("Something went wrong " + error)
} else {
    console.log("Server is listening on port " + port)
}
})