import jwt from 'jsonwebtoken';

/* simulate traffic noise 0-7s */
const createRandomNoise = () => {
  const noise = 500 + (Math.random() * 4000);
  return new Promise(resolve => setTimeout(resolve, noise));
}

const jwtFilter = async (request, response, next) => {
  await createRandomNoise();
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