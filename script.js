for (var index = 1; index < 101; index++) {
        if (index % 3 === 0 && index % 5 != 0) {
            console.log('Fizz - (Divisibile x 3)')
        } else if (index % 5 === 0 && index % 3 != 0) {
            console.log('Buzz - (Divisibile x 5)')
        } else if (index % 3 === 0 && index % 5 === 0) {
            console.log('Fizz-Buzz')
        } else {
        console.log(index)
        }
    }
