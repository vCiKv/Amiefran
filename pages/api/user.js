import { withIronSessionApiRoute } from "iron-session/next";
import IronSessionOptions from './options'

export default withIronSessionApiRoute(
  function userRoute(req, res) {
    res.send({ user: req.session.user });
  },
  IronSessionOptions
);