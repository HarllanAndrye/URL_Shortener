import { Request, Response } from 'express';
import { Link } from '../models/link-model';
import linksRepository from '../models/linksRepository-model';


function generateCode() {
  let text = '';
  // Possibilidade de caracteres que terá o link curto
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // 5 caracteres serão utilizados para gerar o código
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

// Aqui, a definição do tipo é característica específica do TypeScript
async function postLink(req: Request, resp: Response) {
  const link = req.body as Link;
  link.code = generateCode();
  link.hits = 0;

  const result = await linksRepository.add(link);

  if (!result.id) return resp.sendStatus(400);

  link.id = result.id; // Adicionando o ID criado

  resp.status(201).json(link); // Enviar resposta para o front-end
}

async function getLink(req: Request, resp: Response) {
  const code = req.params.code as string;
  const link = await linksRepository.findByCode(code);

  if (!link)
    resp.sendStatus(404);
  else
    resp.status(200).json(link);
}

async function hitLink(req: Request, resp: Response) {
  const code = req.params.code as string;
  const link = await linksRepository.hit(code);

  if (!link)
    resp.sendStatus(404);
  else {
    resp.status(200).json(link);
  }
}

export default {
  postLink,
  getLink,
  hitLink
}