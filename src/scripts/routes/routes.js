import Invitation from '../views/pages/invitation';
import Cover from '../views/pages/cover';
import Detail from '../views/pages/detail';

const routes = {
  '/': Invitation, // default page
  '/cover': Cover,
  '/invitation/:id': Invitation,
};

export default routes;
