import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const myModuleBucket = new cdk.CfnResource(this, "MyModuleBucket", {
      type: "MyOrg::S3::SuperBucket::MODULE",
      properties: {
        BucketName: `${cdk.Names.uniqueId(this)}-bucket`.toLowerCase()
      }
    });
  }
}
