import Constants from "expo-constants";

const ROOT_URL = "http://api-staging.joinbubble.co.uk";

const ENV = {
  dev: {
    ROOT_URL,
  },
  staging: {
    ROOT_URL,
  },
  prod: {
    ROOT_URL,
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (
    env === null ||
    env === undefined ||
    env === "" ||
    env.indexOf("dev") !== -1
  )
    return ENV.dev;
  if (env.indexOf("staging") !== -1) return ENV.staging;
  if (env.indexOf("prod") !== -1) return ENV.prod;
};

const selectedENV = getEnvVars();

export default selectedENV;
