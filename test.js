let date = new Date();
for (let i = 0; i < 100; i++) {
    hashDate(date);
    date.setHours(24, 0, 0, 0);
}

function hashDate(d) {
    let dateString = d.toDateString().slice(4);
    console.log(dateString);
    let sum = 0;
    for (let i = 0; i < dateString.length; i++) {
        sum += dateString.charCodeAt(i);
        sum *= 10;
        sum -= 53;
    }
    sum *= getDayOfYear(d);
    let dateHashed = sum % 156;
    console.log(dateHashed);
}

function getDayOfYear(date = new Date()) {
    const timestamp1 = Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
    );
    const timestamp2 = Date.UTC(date.getFullYear(), 0, 0);

    const differenceInMilliseconds = timestamp1 - timestamp2;

    const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24;

    return differenceInDays;
}
