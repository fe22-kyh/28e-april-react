import jwt from 'jsonwebtoken';

const jwtFilter = (request, response, next) => {
  const authHeader = request.headers["authorization"];

  if (authHeader == undefined || !authHeader.includes("Bearer ")) {
    return response.sendStatus(400);
  }

  // send unauthorized error if jwt fails verification
  try {
    const token = authHeader.replace("Bearer " , "");
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    response.locals.username = payload.username;

    next();
  } catch(err) {
    console.log(err);
    return response.sendStatus(403);
  }
}

export default jwtFilter;