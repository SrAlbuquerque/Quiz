/* eslint-disable linebreak-style */
import db from '../../db.json';

export default function DbHandler(request, response) {
  response.json(db);
}
