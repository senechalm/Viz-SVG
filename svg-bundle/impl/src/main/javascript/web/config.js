/*!
 * Copyright 2010 - 2017 Pentaho Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define(["module"], function(module) {
  return {
    rules: [
      // DET integration
      {
        priority: -1,
        select: {
          type: [
			module.id.replace(/(\w+)$/, "modelGeneric"),
			module.id.replace(/(\w+)$/, "modelCar"),
			module.id.replace(/(\w+)$/, "modelMap"),
			module.id.replace(/(\w+)$/, "modelOffice"),
			module.id.replace(/(\w+)$/, "modelProductLine")
		  ],
          application: "pentaho-det"
        },
        apply: {
          supportedModes: ["STREAM", "MODEL"]
        }
      }
    ]
  };
});
