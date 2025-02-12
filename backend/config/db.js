import { neon } from "@neondatabase/serverless";
import dotenv from 'dotenv'

dotenv.config()
const {PGHOST,PGDATABASE,PGPASSWORD,PGUSER} = process.env;

export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`

)
//postgresql://neondb_owner:npg_ITkE6ujSlU3a@ep-gentle-poetry-a86xusbc-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
