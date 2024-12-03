const authentication = (req, res, next) => {
  const { name, description } = req.body;
  if (name && description) {
    next();
  } else {
    console.log("invalid data");
    res.redirect("/");
  }
};

const userAuth = (req, res, next) => {
  const { name, password } = req.body;
  if (name && password) {
    next();
  } else {
    console.log("invalid data");
    res.redirect("back");
  }
};

const isAuth = (req,res,next)=>{
  let {userName} = req.cookies; 
  if(userName){
      next();
  }else{
      return res.redirect('/login');
  }
}
module.exports = { authentication, isAuth, userAuth };
