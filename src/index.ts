import express from 'express';
import path from 'path';
import dotenv from "dotenv";
import { logger as ServiceLogger} from './utils/logger'
dotenv.config()

const app = express();

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

ServiceLogger.defaultMeta={service:"main-service"}



// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} );
app.get( "/test", ( req, res ) => {
    // render the index template
    res.render( "test",{data:"test1234"} );
} );
// start the Express server
const port = process.env.SERVER_PORT || 4001
app.listen( port, () => {
    ServiceLogger.info({
        message:`server started at http://localhost:${ port }`
    })
} );