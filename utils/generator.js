var sequential = require("sequential-ids");
 
// generate numbers by order sort
var generator = new sequential.Generator({
  digits: 3,
  // format
  restore: "000"
});

generator.start();

module.exports = generator
