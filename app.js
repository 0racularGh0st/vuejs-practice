new Vue({
    el: '#vue-app',
    data: {
       age: '25',
       name: ''
    },
    methods: {
        add : function(){
            this.age++;
        },
        subtract : function(){
            this.age--;
        }
    }
});