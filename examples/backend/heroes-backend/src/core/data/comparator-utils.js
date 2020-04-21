/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

export const attributeMatches = (attribute, search) => {
  return attribute && attribute.toLowerCase().indexOf(search) > -1;
};
