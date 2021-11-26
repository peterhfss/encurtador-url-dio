import { config } from '../config/Constants';
import { Request , Response } from 'express';
import shortId from 'shortid';
import { URLModel } from '../model/URL';

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void>{
        /**
         * Verificação da URL caso já exista
         */
        const { originURL } = req.body;
        const url = await URLModel.findOne({originURL})

            if (url){
                res.json(url)
                return
            } 
        /**
         * Criar hash único para cada URL
         */
        const hash  = shortId.generate()
         /**
         * Salvar a URL no banco de dados
         */
        const shortURL = `${config.API_URL}/${hash}`
        const newURL = await URLModel.create({hash, shortURL, originURL })
        
        /**
         * Encaminhar a URL salva no banco de dados
         */
        res.json(newURL)
    }

    public async redirect(req: Request , res: Response ): Promise<void>{

        const { hash } = req.params
        
        const url = await URLModel.findOne({hash})

        /**
         * Verificação da url para redirecionar ou caso não exista lançar o erro : 'URL not found'
         */
        if(url){
            res.redirect(url.originURL)
            return
        }

        res.status(400).json({error:'URL not found'})
    }

}