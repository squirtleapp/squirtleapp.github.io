//Initialisation
var fs = require("fs");


var overallDict = fs.readFileSync("./wordlist.txt").toString('utf-8');
var answerBank = ['water', 'juice', 'urine', 'honey', 'blood', 'fluid', 'sauce', 'booze', 'cider', 'broth', 'bevvy', 'lager', 'lassi', 'latte', 'pimms', 'punch', 'stout', 'tonic', 'vodka', 'hooch', 'juicy', 'drink', 'turps', 'pepsi', 'fanta'];

print(overallDict);
