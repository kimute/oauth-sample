
export const GET = async () => {

  const url = 'https://github.com/login/oauth/authorize'
    + `?client_id=${process.env.CLIENT_ID}`
    + '&scope=read:user'
    + '&redirect_uri=http://localhost:3000/api/authorize/result';

  return Response.json({}, {
    status: 307,
    headers: {
      Location: url,
    },
  });
};
