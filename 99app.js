let friends = ['Joseph', 'Jon', 'Kaitlin', 'Jesse', 'Hailey'];

for (let index = 0; index < friends.length; index++) {

    console.log(friends[index].toUpperCase() + ":")

    for (let count = 99; count > 0; count--) {
        if (count > 2) {
            console.log(count + " lines of code in the file, " + count + " lines of code; " + friends[index] + " strikes one out, clears it all out, " + (count - 1) + " lines of code in the file.");
        }
        else if (count == 2) {
            console.log(count + " lines of code in the file, " + count + " lines of code; " + friends[index] + " strikes one out, clears it all out, " + (count - 1) + " lines of code in the file.");
        }
        else if (count == 1) {
            console.log(count + " line of code in the file, " + count + " line of code; " + friends[index] + " strikes one out, clears it all out, " + (count - 1) + " line of code in the file!");

        };

    };

};

