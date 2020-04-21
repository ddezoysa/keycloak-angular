/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { logger } from './log.config';

export const appPort = process.env.APP_PORT || 3000;

export const initDemoApp = () => {
  console.log('Keycloak Server Demo presented by:');
  console.log(' _               _         _                      _         ');
  console.log('| |_ ___ _ _ ___| |___ ___| |_    ___ ___ ___ _ _| |___ ___ ');
  console.log("| '_| -_| | |  _| | . | .'| '_|  | .'|   | . | | | | .'|  _|");
  console.log('|_,_|___|_  |___|_|___|__,|_,_|  |__,|_|_|_  |___|_|__,|_|  ');
  console.log('        |___|                            |___|              ');
};

export const serverInitCallback = () => {
  logger.info(`Keycloak Server Example Initialized on Port ${appPort}`);
  logger.info(`For a complete list of API services, visit: http://localhost:${appPort}/api/docs`);
  logger.info('---------------');
};
