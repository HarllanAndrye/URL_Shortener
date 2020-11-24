import { Router } from 'express';
import linksController from '../controllers/links-controller';

const router = Router();

// Exemplo com função criada direto no método
/*router.post('/links', (req, res) => {
  res.send('POST');
});*/

// Rota para salvar um novo link vindo do front-end
router.post('/links', linksController.postLink);

// Rota para retornar a URL original (de acordo com o código da URL curta) para o front-end
router.get('/links/:code', linksController.hitLink);

// Rota para acessar as estatísticas do link acessado
router.get('/links/:code/stats', linksController.getLink);

export default router;