#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InfrastructureStack } from '../lib/infrastructure-stack';
import { exit } from 'process';

const environment = process.env.ENVIRONMENT ?? undefined;
if (environment === undefined){
    console.error("ENVIRONMENT not specified");
    console.error("Please specify an ENVIRONMENT variable");
    exit(1);
}

const app = new cdk.App();
new InfrastructureStack(app, `${environment}-InfrastructureStack`);
