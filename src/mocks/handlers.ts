import { rest } from 'msw';
import { acronymList, acronymsDetails } from '@data';

const list = acronymList.sort().map((acronym) => acronym.toLowerCase());

const handlers = [
  rest.get('/acronyms', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(list));
  }),

  rest.get('/acronym/:id', (req, res, ctx) => {
    const { id } = req.params;

    const acronym = acronymsDetails.find((item) => item.acronym === id);

    if (!acronym) {
      return res(
        ctx.status(404),
        ctx.json({ message: `Acronym ${id} not found.` }),
      );
    }

    return res(ctx.status(200), ctx.json(acronym));
  }),
];

export default handlers;
