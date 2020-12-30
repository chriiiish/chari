#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InfrastructureStack } from '../lib/infrastructure-stack';
import { exit } from 'process';

const environmentCode = process.env.ENVIRONMENT_CODE ?? undefined;
if (environmentCode === undefined){
    console.error("ENVIRONMENT_CODE not specified");
    console.error("Please specify an ENVIRONMENT_CODE variable");
    exit(1);
}

const app = new cdk.App();
new InfrastructureStack(app, `${environmentCode}-InfrastructureStack`);
