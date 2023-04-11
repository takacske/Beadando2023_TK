const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const jsonParser = bodyParser.json({ })
const { PrismaClient } = require('@prisma/client') 
const prisma = new PrismaClient ()


const app = express()
const port = process.env.PORT

dotenv.config()


app.get('/esemeny', jsonParser, async (req, res) => {
    try {
        const esemenyek = await prisma.esemenyek.findMany({
            include: {
                helyszin: true,
                helyszin: true
            }
        })
        res.status(200).json(esemenyek)
    } catch {
        res.status(400).json({ })
    }
})

app.post('/esemeny', jsonParser, async (req, res) => {
    try {
        const esemeny = await prisma.esemeny.create({
            data: {
                nev: req.body.nev,
                date: req.body.date,
                time: req.body.time,
                description: req.body.description,
                helyszin: {
                    connect: {
                        id: req.body.helyszinId
                    }
                },
                helyszin: {
                    connect: {
                        id: req.body.helyszinId
                    }
                }
            }
        })
        res.status(201).json({  })
    } catch (e) {
        res.status(400).json({ })
    }
})


app.put('/esemeny', jsonParser, async (req, res) => {
    try {
        const esemeny = await prisma.esemenyek.update({
            where: {
                id: req.body.id
            },
            data: {
                nev: req.body.nev,
                date: req.body.date,
                time: req.body.time,
                description: req.body.description,
                helyszin: {
                    connect: {
                        id: req.body.helyszinId
                    }
                },
                helyszin: {
                    connect: {
                        id: req.body.helyszinId
                    }
                }
            }

        })
        res.status(200).json({  })
    } catch {
        res.status(400).json({ })
    }
})


app.delete('/esemeny', jsonParser, async (req, res) => {
    try {
        const esemeny = await prisma.esemenyek.delete({
            where: {
                id: req.body.id
            }
        })
        res.status(200).json({  })
    } catch {
        res.status(400).json({ })
    }
})


app.get('/helyszin', jsonParser, async (req, res) => {
    try {
        const helyszinek = await prisma.helyszin.findMany()
    res.status(200).json(helyszinek)
    }
    catch {
        res.status(400).json({ })
    }
    
})

app.post('/helyszin', jsonParser, async (req, res) => {
    try {
        const helyszin = await prisma.helyszin.create({
            data: {
                nev: req.body.nev,
                latitude: parseFloat(req.body.szelesseg),
                longitude: parseFloat(req.body.hosszasag)
            }
        })
        res.status(201).json({ })
    } catch(e) {
        res.status(400).json(e)
    }
})

app.put('/helyszin', jsonParser, async (req, res) => {
    try {
        const helyszin = await prisma.helyszin.update({
            where:{
                id: req.body.id
            },
            data: {
                nev: req.body.nev,
                latitude: parseFloat(req.body.szelesseg),
                longitude: parseFloat(req.body.hosszasag)
            }
        })
        res.status(200).json({ })
    } catch {
        res.status(400).json({ })
    }
})


app.delete('/helyszin', jsonParser, async (req, res) => {
    try {
        const helyszin = await prisma.helyszin.delete({
            where:{
                id: req.body.id
            }
        })
        res.status(200).json({ })
    } catch {
        res.status(400).json({ })
    }
})


app.get('/szervezo', jsonParser, async (req, res) => {
    try {
        const szervezok = await prisma.szervezo.findMany()
    res.status(200).json(szervezok)
    } catch {
        res.status(400).json({ })
    }
})

app.post('/szervezo', jsonParser, async (req, res) => {
    try {
        const szervezo = await prisma.szervezo.create({
            data: {
                nev: req.body.nev,
                email: req.body.email,
                phone: req.body.phone,
            }
        })
        res.status(201).json({  })
    } catch {
        res.status(400).json({  })
    }
})

app.put('/szervezo', jsonParser, async (req, res) => {
    try {
        const szervezo = await prisma.szervezo.update({
            where:{
                id: req.body.id
            },
            data: {
                nev: req.body.nev,
                email: req.body.email,
                phone: req.body.phone,
            }
        })
        res.status(200).json({  })
    } catch {
        res.status(400).json({  })
    }
})


app.delete('/szervezo', jsonParser, async (req, res) => {
    try {
        const szervezo = await prisma.szervezo.delete({
            where:{
                id: req.body.id
            }
        })
        res.status(200).json({  })
    } catch {
        res.status(400).json({  })
    }
})


app.listen(port, () => {
    console.log('faszom elindult itt meg itt:'+port)
})

