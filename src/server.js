const Hapi = require('@hapi/hapi')

const init = async () => {
    const server = Hapi.server({
        port: 3030,
        host: 'localhost'
    })

    await server.start()
    console.log(`Server ${server.info.uri} is running`)
}

init()