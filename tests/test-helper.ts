import Application from 'qunit-dom-typescript-reproduction/app';
import config from 'qunit-dom-typescript-reproduction/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import { setup } from 'qunit-dom';
import * as QUnit from 'qunit';
import 'qunit-dom';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

start();