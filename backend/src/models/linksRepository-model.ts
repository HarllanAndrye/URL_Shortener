import linkModel, { ILinkModel } from './linkModel-model';
import { Link } from './link-model';

function findByCode(code: string) {
  // ILinkModel é a junção do type link (link-model.ts) com o linkModel (linkModel-model.ts)
  return linkModel.findOne<ILinkModel>({ where: { code } });
}

function add(link: Link) {
  return linkModel.create<ILinkModel>(link);
}

async function hit(code: string) {
  const link = await findByCode(code); // Obter o link do BD

  if (!link)
    return null;

  link.hits!++;

  await link.save(); // Update no BD

  return link;
}

export default {
  findByCode,
  add,
  hit
}