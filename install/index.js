const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try { 
    const ref = core.getInput('ref');
    const command = `npm install -g jhipster/generator-jhipster#${ref}`;
    console.log(`Running ${command}!`);
    await exec.exec(command);
    console.log(`Done ${command}!`);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
