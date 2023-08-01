const load = async ({ locals: { getSession } }) => {
  return {
    session: await getSession()
  };
};
const config = {
  runtime: "nodejs18.x"
};
export {
  config,
  load
};
