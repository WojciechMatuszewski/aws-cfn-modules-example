#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ApplicationStack } from "../lib/application-stack";

console.log("im invoked");

const app = new cdk.App();
new ApplicationStack(app, "ApplicationStack", {
  synthesizer: new cdk.DefaultStackSynthesizer({
    qualifier: "mod"
  }),
  env: {
    region: "eu-west-1",
    account: "484156073071"
  }
});
