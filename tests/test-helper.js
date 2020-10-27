import Application from 'qunit-dom-typescript-reproduction/app';
import config from 'qunit-dom-typescript-reproduction/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
