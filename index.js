const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: `path/to/${Date.now()}.csv`,
    header: [
        { id: 'name', title: 'NAME' }, { id: 'lang', title: 'LANGUAGE' }, { id: 'school', title: 'SCHOOL' }, {id: 'age', title:"AGE"}
    ]
});

const records = [
    { name: 'Bob', lang: 'French, English',school: 'Federal University of technology, Akure', age:"21" },
    { name: 'Mary', lang: 'English',school:'university of Abuja', age:"31" },
    { name: 'Kehinde', lang: 'Yoruba', school:'N/A', age:"41" },

];

csvWriter.writeRecords(records)       // returns a promise
    .then((res) => {
        console.log('Converted to csv');
    });

// This will produce a file path/to/file.csv with following contents:
//
//   NAME,LANGUAGE
//   Bob,"French, English"
//   Mary,English