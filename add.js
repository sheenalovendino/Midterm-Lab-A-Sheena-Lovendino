const fs = require('fs');

const add = function(note=[],oldNote){
    let fNote = JSON.parse(oldNote);

    fNote.push(note);

    let ObjectNote = JSON.stringify(fNote);

    fs.writeFileSync('data.txt', ObjectNote);
}

module.exports = add;