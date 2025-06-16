import App from './src/app.js'
import dbconnect from './src/db/db-config.js'


App.listen(process.env.PORT, () => {

    try {
        console.log("server start in " + process.env.PORT);
    } catch (error) {

        console.log("got some error  " + error);
    }
})