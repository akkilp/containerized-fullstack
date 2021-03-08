// @ts-ignore
import keys from './keys';
import { Pool } from 'pg';

// Postgres setup
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    // @ts-ignore
    port: keys.pgPort
})

export default pgClient