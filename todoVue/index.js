Vue.component('task', {
    props: ['data'],
    methods: {
        task_done() {
            this.$emit('task_done');
        }
    },
    template: `
        <div class="task">
            <div>
                <h3 class="task__title">{{data.title}}</h3>
                <p class="task__desck">{{data.desc}}</p>
            </div>
            <button @click="task_done()" 
                    class="task__done">✔️</button>
         </div>
    `
});

let vue = new Vue({
    el: '#app',
    data: {
        newTask:
            {
                title: '',
                desc: ''
            },
        tasks: [
            {
                title: 'Изучить Vue',
                desc: 'Прочитать книгу "Величие Vue JS2"'
            },
            {
                title: 'Записать видео',
                desc: 'Рассказать про vuex'
            }
        ]
    },
    methods: {
        delete_task(id) {
            this.tasks.splice(id, 1);
        },
        add_task() {
            if (this.newTask.title) {
                this.tasks.push({
                    title: this.newTask.title,
                    desc: this.newTask.desc,
                });
                this.newTask.title = '';
                this.newTask.desc = '';
            }

        }
    }
});