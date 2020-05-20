const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try { 
    const ref = core.getInput('ref');
    const JHIPSTER_PATH = '../generator-jhipster';
    core.exportVariable('JHIPSTER_PATH', JHIPSTER_PATH);
    const command = `git clone --single-branch --branch ${ref} https://github.com/jhipster/generator-jhipster.git ${JHIPSTER_PATH}`;
    console.log(`Running ${command}!`);
    await exec.exec(command);
    console.log(`Done ${command}!`);
    await exec.exec(`npm link ${JHIPSTER_PATH}`);
    console.log(`Done ${command}!`);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
