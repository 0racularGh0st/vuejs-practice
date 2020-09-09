new Vue({
    el: '#vue-app',
    data: {
       age: 25,
       name: '',
       a: 0
    },
    methods: {
        add : function(){
            this.age++;
        },
        subtract : function(){
            this.age--;
        }
    },
    computed: {
        addToA: function(){
            return this.a + this.age;
        }
    }
});