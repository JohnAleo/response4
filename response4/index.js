const http=require("http");
const server= http.createServer((req, res) => {
if (req.url === "/"){
    res.end('<h1>Used Car 1th response</h1>');
} else if (req.url==="/Usedcars"){
    res.end('<h1>KIA</h1> <br> <h1>TOYOTA</h1> <br> <h1>BMW</h1> <br> <h1>Maserati</h1>')
} else {
    res.end('<h1>404 ERROR</h1>')
}
})

const PORT= process.env.PORT || 5003;
server.listen(PORT, () => {
console.log("Server running on port", PORT)
});
