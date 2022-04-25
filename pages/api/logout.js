import { withIronSessionApiRoute } from "iron-session/next";
import IronSessionOptions from './options'

export default withIronSessionApiRoute(
  function logoutRoute(req, res, session) {
    req.session.destroy();
    res.send({ ok: true });
  },
  IronSessionOptions
);