import * as lambda from "aws-cdk/aws-lambda"
import * as lambdaNodeJS from "aws-cdk-lib/aws-lambda-nodejs"
import * as cdk from 'aws-cdk-lib'
import { Construct } from "constructs"


export class ProductAppStack extends cdk.Stack {

  readonly productsFetchHandler: lambdaNodeJS.NodejsFunction

  constructor(scope: Construct, id: string, props?: cdk.StackProps)  {
    super(scope, id, props)
    // "Products Fetch Handler" -> resource name in stack
    this.productsFetchHandler = new lambdaNodeJS.NodejsFunction(this, "Products Fetch Function", {
      functionName: "ProductsFetchFunction", // name shown in console
      entry: "lambda/products/productsFetchFunction.ts", // entry point to invoke the handler
      handler: "handler", // method to invoke the function
      memorySize: 128,
      timeout: cdk.Duration.seconds(5),
      bundling: {
        minify: true,
        sourceMap: false
      } // how is this packaged for aws

    }) 

  }   
}