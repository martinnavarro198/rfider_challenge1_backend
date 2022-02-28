import express, { Request, Response, NextFunction} from 'express'
import ItemsService from '../services/ItemsService'

const router = express.Router()

router.get('/views/get/:id', (req: Request, res: Response) => {
    return ItemsService.getViews(req.params.id)
    .then((resp) => {
        res.send({ views: resp })
    })
})

router.get('/views/increase/:id', (req: Request, res: Response) => {
    return ItemsService.increaseView(req.params.id)
    .then((resp) => {
        res.send({ views: resp })
    })
})

export default router