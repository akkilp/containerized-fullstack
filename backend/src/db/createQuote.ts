import pgClient from './connectDB';
import { createQuoteType } from '../types';
import Logger from '../utils/logger';

const insertArtist = 'INSERT INTO artists(name) VALUES ($1) ON CONFLICT DO NOTHING;'

const insertQuote = `
    INSERT INTO 
    quotes(
        artist,
        creator,
        quote
    ) VALUES (
        (SELECT id FROM artists WHERE name=$1),
        (SELECT id FROM users WHERE name=$2),
        $3
    ) RETURNING *; 
`

const createQuote = async ( data:createQuoteType ) => {
    try{
        const {artist, creator, quote} = data;

        // Insert artist to table or ignore if already exists
        await pgClient.query(insertArtist, [artist]);

        // Insert quote to db
        const response = await pgClient.query(insertQuote, [artist, creator, quote])

        return response.rows[0]
    } catch (err){
        Logger.error("Create quote failed", err)
        return false
    }
}

export default createQuote;
