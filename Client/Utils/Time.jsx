export function Time() {
        const date = new Date();
        let dateTypes = [date.getDate(), date.getMonth() + 1, date.getFullYear()]
        let timeTypes = [date.getHours(), date.getMinutes(), date.getSeconds()]

        let newDate = [];
        let newTime = [];

        function format(number, arr) {

            if (number < 10) {
                number = `0${number}`;
            }

            return arr.push(number);
        }

        for (let date of dateTypes) {
            format(date, newDate);
        }
        for (let time of timeTypes) {
            format(time, newTime);
        };

        return `${newDate.join('/')} ${newTime.join(':')}`;

    

}