var program = require('commander');
var packageFile = require('./package.json');

program.version(packageFile.version);

// Utility Actions

program
  .command('setup')
  .description('Command to setup BB8 With your Mac')
  .action(require('./commands/setup'));

program
  .command('disconnect')
  .description('Command to disconnect from your BB8 Unit')
  .action(require('./commands/disconnect'));

// Real Actions

program
  .command('disco')
  .description('Command to make your BB8 Unit A disco ball')
  .action(require('./commands/disco'));

program
  .command('weather')
  .description('Command to get the weather colour from your BB8 Unit')
  .option('-c, --city <city>', 'City name such as manchester')
  .option('-cc, --country <country>', 'City name such as uk')
  .option('-k, --api-key <apiKey>', 'API Key')
  .action(require('./commands/weather'));

try {
  program.parse(process.argv);
} catch (e) {
  console.error(e);
}
