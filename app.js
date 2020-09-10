new Vue({
    el: '#vue-app',
    data: {
       age: 25,
       name: '',
       a: 0,
       available: false,
       nearby: false
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
        },
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});