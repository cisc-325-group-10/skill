'use strict';

const { execSync } = require('child_process');

class Plugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      'before:webpack:package:packageModules': this.deployCompileEvents.bind(this)
    };
  }

  deployCompileEvents() {
    this.serverless.cli.log("RUNNING PERMISSION CHANGE");
    execSync("chmod -R ugo+rwx ./.webpack");
  }

}

module.exports = Plugin;