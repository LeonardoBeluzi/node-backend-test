import express from 'express'

const api = express()

api.listen(8000, () => {
    console.log(`Api listening on port 8000`)   
})