# Create an Web App with CICD pipeline to deploy into cloud. 
### Simple register web app
 - Skills: 
     - *JavaScript, HTML, CSS, Node.js, Express, Mocha,* 
     - *AWS SDK, AWS DynamoDB, AWS Elasticbeanstalk, AWS S3,* 
     - *Terraform, Docker, Github, Github action, yaml*
## Architecture

## Development plan
1. Build Web app and deploy into local machine
    1. Build FE - ***HTML, CSS, JavaScript***
    2. Build BE - ***Node.js***
    3. Connect DB - ***AWS Dynamodb*** by using ***AWS SDK***
2. Adapt Github action CICD pipeline
    1. Sets Enviroment variables and adapt CICD piprline into the app
    2. Add test for the app by using ***Mocha***
    3. Add Build ***docker image*** and push to dockerhub registry and test the docker image
3. Deploy into ***AWS Elastic Beanstalk*** by using ***terraform*** and AWS SDK


## DevOps plan
### CICD pipeline
1. Build and test the app
    - curl test for frontend
    - Create a test case to test API test using Mocha/chai
2. Create a docker image
    - Build docker image
    - Push to docker hub registry
3. Test docker image
    - test docker image
4. Deploy into cloud
    - Create AWS resources by using Terraform
    - Upload files into AWS S3
    - Deploy into AWS Elastic beanstalk

### Security
- AWS SDK credential encrypted as variables
- Docker hub credentials and docker username and registry name encrypted as variables
- Use AWS IAM user with limited permission

