import * as fs from 'fs';
import * as core from '@actions/core';

function formatResponse(arrayOfBoardsWithCardIds: [{
  id: string,
  cardIds: []
}]) {
  return core.setOutput("cardIds", JSON.stringify(arrayOfBoardsWithCardIds));;
}
async function run() {
  if (process.env.GITHUB_EVENT_NAME !== 'push') {
    core.setOutput("cardIds", JSON.stringify([]));
  }
  const event = fs.readFileSync(process.env.GITHUB_EVENT_PATH as string, { encoding: 'utf8' });
  if(!event) {
    return 
  }
}

run();
