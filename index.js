require('dotenv').config();
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { UserDetails } = require('./user')

const csvWriter = createCsvWriter({
    path: `path/to/${Date.now()}.csv`,

    header: [
        { id: 'username', title: "USERNAME" },
        { id: 'email', title: "EMAIL" },
        { id: 'number', title: "PHONE NUMBER" },
        { id: 'vendor', title: "VENDOR" },
        { id: "withdrawn", title: "WITHDRAWN" },
        { id: "income", title: "INCOME" },
        { id: "ambassador", title: "AMBASSADOR" },
        { id: "totalreferralbonus", title: "TOTAL REFERRAL BONUS" },
        { id: "orders", title: "TOTAL ORDERS" },
        { id: 'joinDate', title: "JOIN ON" }

    ]
});

const records = UserDetails.map(user => {
    // converting date to readable dates
    const date = new Date(user.createdAt);
    const normalDate = date.toLocaleDateString();

    // converting date joined to a readable time
    const time = new Date(user.createdAt);
    const normalTime = time.toLocaleTimeString();


    return {
        username: user.username,
        email: user.email,
        number: user.number? user.number.toString() : '',
        vendor: user.isVendor ? 'YES' : 'NO',
        withdrawn: user.withdrawn,
        income: user.income,
        ambassador: user.ambassador ? 'YES' : 'NO',
        totalreferralbonus: user.totalReferralBonus,
        orders: user.orders.length,
        joinDate: normalDate +" "+ normalTime,



    }
})

csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('Converted to csv');
    });