# CloudFormation Module example

This repository contains example usage of a custom [AWS CloudFormation](https://aws.amazon.com/cloudformation/) module in the context of the [AWS CDK](https://aws.amazon.com/cdk/) application.

## Deployment

- First deploy the CloudFormation module

  ```sh
  cd module
  cfn submit
  ```

- Then deploy the AWS CDK application

  ```sh
  cd application
  npm i
  npm run bootstrap
  npm run deploy
  ```

## Learnings

- The [AWS CloudFormation modules](https://aws.amazon.com/blogs/mt/introducing-aws-cloudformation-modules/) differ from the [AWS CloudFormation Resource types](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html) or [AWS CloudFormation hooks](https://aws.amazon.com/blogs/mt/proactively-keep-resources-secure-and-compliant-with-aws-cloudformation-hooks/). The modules are **plain CloudFormation templates**.

- To push the module into the CloudFormation registry in your account, CloudFormation creates various intermediary resources.

- I had a **huge problem** with deploying this example, but **it was not related to AWS CloudFormation**. - It turns out that **AWS CDK caches the names of the SSM parameters `cdk deploy` is first run**.

  - Now imagine running the `cdk deploy` by accident, switching the `qualifier` command, and trying to deploy again.

  - You will see an error that AWS CDK could not find some kind of SSM parameter, and the name of the parameter contains the "default" `qualifier`, not the one you have specified.

  - **Use the `--no-previous-parameters` parameter when deploying** to ensure this issue does not occur.

## My take

CloudFormation modules seem attractive, especially in the context of [CloudFormation Stack Sets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html).
With the AWS CDK getting more and more popular, I doubt they will have more use-cases than the one I mentioned, **at least in my case**.
