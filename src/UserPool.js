import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_RFuVxnQYN",
  ClientId: "12ilj9la7c0oovlt8aumbo7tlc",
};

export default new CognitoUserPool(poolData);
