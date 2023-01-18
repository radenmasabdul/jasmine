import express from "express"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"
import db from "./config/Database.js"
import SequelizeStore from "connect-session-sequelize"
import UserRoutes from "./routes/UserRoutes.js"
import LaporanRoutes from "./routes/LaporanRoutes.js"
import AuthRoutes from "./routes/AuthRoutes.js"

dotenv.config()

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
})

// (async () => {
//     await db.sync()
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(express.json());
app.use(UserRoutes);
app.use(LaporanRoutes);
app.use(AuthRoutes);

// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log('Server Up and Running...');
})