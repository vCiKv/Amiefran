import { withIronSessionApiRoute } from "iron-session/next";
import IronSessionOptions from './options'
export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    // get user from database then:
    if(req.method === "POST"){
        const {username,password} = req.body
        console.log('vody',req.body)
        if(username === 'admin' && password === process.env.PASSWORD && password !== ''){
            req.session.user = {
                username:username,
                admin: true,
            };
              await req.session.save();
              res.status(200).send({ ok: true });
        }else{
            res.status(302).send({ ok: false})
        }
      
    }else{
        res.status(402).send({ ok: false})
    }

  },
  IronSessionOptions
);