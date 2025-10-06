import fastify from "fastify";


const server = fastify()

server.listen(
    ({
        port: "3000",
        host: "0.0.0.0"
    }, () => {
        console.log("servidor rodando com sucesso")
    })
)