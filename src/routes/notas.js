import { Router } from "express";
import Nota from "../model/notas.js"

// rutas 
const router = Router()

// Getters
router.get('/notas', async(req,res) => {
    const notas = await nota.find();
    res.send(notas)
})

router.post('notas',async(req,res)=>{
    const nota = new Nota({
        title: req.body.title
        content: req.body.content
    });
    await nota.save()
    res.send(nota)
    res.status(200).send('nota creada')
})

router.get('/notas/:id', async(req,res)=>{
    const nota = await Nota.findOne({_id: req.params.id})
})

router.patch('/notas/:id', async(req,res)=>{
    try{
    const nota = await nota.findOne({_id: req.params.id})
    if(req.body.title){
        nota.title= req.body.title
    } 
    if(req.body.content){
        nota.content = req.body.content
    }

    nota.save()
    res.send(nota)
    }catch{
        res.send('No existe la nota')
    }
})

router.delete('/notas/:id', async(req,res)=>{
    try{
    const nota = await nota.deleteOne({_id: req.params.id})
    res.send(nota)
    }catch{
        res.send('No existe la nota')
    }
})

export default router;