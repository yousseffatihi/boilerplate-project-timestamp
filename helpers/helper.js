function isValidDate(stringDate) {
    const tempDate = new Date(stringDate);

    // Check if tempDate is a valid date object and not NaN
    if (!isNaN(tempDate.getTime())) {
        return true;
    } else {
        return false;
    }
}

function isValidTimestamp(stringTimestamp) {
    if (!stringTimestamp) {
        return false;
    }

    // Check if the entire stringTimestamp is a number
    if (isNaN(Number(stringTimestamp))) {
        return false;
    }

    return true;
}

const helpers = {
    isValidDate,
    isValidTimestamp,
};

module.exports = helpers;