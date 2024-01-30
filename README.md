# Documentation for NX1 Deploy - App GitHub Workflow

## Overview
This GitHub workflow is designed for deploying an ExpressJS application using the NX1 platform. It is triggered manually and performs a series of steps to prepare, assume the necessary role, and deploy the ExpressJS application to a specified environment.

## Workflow Name

**Name**: NX1 Deploy - ExpressJS App
Run Name: This workflow will be logged as "Deploy example-expressjs-app to my environment by @<github_actor>" in the GitHub actions tab, where <github_actor> is the username of the person who triggered the run.

## Trigger

**Manual (workflow_dispatch)**: This workflow is triggered manually. It does not run automatically on any code push or pull request event. It needs to be manually dispatched from the GitHub Actions tab in the repository.

## Permissions

**id-token**: write: This workflow requires permissions to write an ID token for authentication purposes.

contents: read: It also requires read access to the repository contents.

## Jobs

### Deploy

This job runs on the latest Ubuntu runner and consists of several steps:

#### 1.**Checkout code**:

Action: actions

Purpose: Checks out the repository code, allowing the workflow to access it.

#### 2.**NX1 Prepare Deployment**:

Action: Prepare

With:

operation: 'prepare'

app_id: The application ID.**Do not modify it**.

env_id: The environment ID where the app will be deployed.**Do not modify it**. 

api_token: An API token for authentication, stored in GitHub secrets. Create your api_token on [NX1.io app](https://app.nx1.io/) or read the [documentation](https://docs.nx1.io/).

Purpose: Prepares the deployment environment for the ExpressJS app using the NX1 platform.

#### 3.**NX1 Assume Role**:

Action: nx1-io/app-copilot-action@main
With:
operation: 'assume-role'

Purpose: Assumes the necessary role for deployment.

#### 4.**NX1 Deploy Service - expressjs-app**:

Action: nx1-io/app-copilot-action@main

With:

operation: 'deploy'

service: 'expressjs-app' (the name of the service to be deployed -**define it on NX1.io app**)

Purpose: Deploys the ExpressJS application to the specified environment.

### Additional Notes

**Version**: This document corresponds to the first revision of the workflow (rev:1).

**Security**: The workflow uses a secret (EXAMPLE_EXPRESS_JS) for the API token, ensuring security and confidentiality.

**Customization**: To adapt this workflow for different applications or environments, modify the api_token.


# Getting Started with Create ExpressJS App

This project was bootstrapped with [Create ExpressJS App](https://expressjs.com/).

## Available Scripts

In the project directory, you can run:

    npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## Learn More

You can learn more in the [Create ExpressJS App documentation](https://expressjs.com/en/starter/installing.html).

To learn React, check out the [ExpressJS documentation](https://expressjs.com/).
