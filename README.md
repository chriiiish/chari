![](branding/chari_logo.png)
An app to track an visualise journeys live.

Ever been on a long road trip and you want to be able to track your progress a bit better than what the GPS gives you? Maybe with a bit more style? Then this is for you. 

## The System
Chari consists of:

1. **An App**
   This is the data source. Have the app running on your phone to track progress of the journey
2. **A Web Application**
   This is the data visualisation platform. It is a javascript front-end client.
3. **An API**
   This is the business-logic of the system

## Purpose
Utimately this project is designed to test a few key components:

1. **CI/CD**
   Testing Continuous Integration and Continuous Delivery for a mono repo on GitHub with GitHub Actions
2. **GitOps + Compliance**
   Ensuring absolutely *everything* is done as code. Templates must be compliant with a set of rules. In theory this project should be hugely compliant with various standards (ISO27001, etc.) while being able to maintain fast flow of changes to production

## Repo Layout
    .
    ├── back-end            # Back-end API
    ├── branding            # All branding info / colours etc.
    ├── documentation       # Documentation for this project
    ├── front-end           # Front-end web application code
    ├── mobile-app          # Mobile app code
    ├── .gitignore
    ├── LICENSE
    └── README.md

## System Design

![](system_design.png)

## Technology
<a href="//aws.amazon.com">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" alt="AWS" width="200px" />
</a>
<a href="//aws.amazon.com/cdk/">
    <img src="https://www.cdkday.com/static/img/cdk_wide.png" alt="CDK" width="200px" />
</a>
<a href="//angular.io/">
    <img src="https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png" alt="Angular" width="200px" />
</a>
<a href="//github.com/features/actions">
    <img src="https://dev-to-uploads.s3.amazonaws.com/i/96ufidjjlxgomqim05oc.png" alt="Github Actions" width="200px" />
</a>