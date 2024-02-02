# RTD: Road To DevOps 2: Create an Web App with CICD pipeline to deploy into cloud. 
## Simple register web app
## Architecture

## Development plan
1. Build Web app and deploy into local machine
    1. Build FE - **HTML, CSS, JavaScript**
    2. Build BE - **Node.js**
    3. Connect DB - **AWS Dynamodb** by using AWS SDK
2. Adapt Github action CICD pipeline
    1. Bundling - **Webpack**
    2. Test for the bundled file
3. Build **docker image** and push to registry and test the docker image
4. Deploy into **AWS Elastic Beanstalk** by using **terraform** and AWS SDK


## DevOps plan
### CICD pipeline
1. Build job
    - Bundling by using Webpack
    - Upload artefects
2. Create a docker image
    - Create docker image
    - Upload to registry
3. Test docker image
    - test docker image
4. Deploy into cloud
    - Create AWS resources by using Terraform
    - Upload files into AWS S3
    - Deploy into AWS Elastic beanstalk

