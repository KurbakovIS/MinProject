let vue = new Vue({
    el: '#app',
    data: {
        result: '',
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        operations: ['+', '-', '*', '/'],
        flag: false,
    },
    methods: {
        input: function (char) {
            if (this.flag && !this.operations.includes(char)) {
                this.reset()
            }
            this.result = this.result.toString();
            if (this.operations.includes(this.result[(this.result.length) - 1]) &&
                this.operations.includes(char)) {
                this.result = this.result.replace(this.result[(this.result.length) - 1], char)
            } else {
                this.result += char;
            }
            this.flag = false;

        },
        reset: function () {
            this.result = ''
        },
        calc: function () {
            this.result = eval(this.result);
            if (this.result == 'Infinity') {
                this.result = 0
            }
            this.flag = true;

        }
    }
});