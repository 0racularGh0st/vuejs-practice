new Vue({
    el: '#vue-app',
    data: {
       age: 25,
       name: '',
       a: 0,
       available: false,
       nearby: false,
       success: false,
       error: false,
       characters: ['Eren','Mikasa','Armin'],
       titans: [
           {name : 'Eren', age: 22},
           {name : 'Mikasa', age: 23},
           {name: 'Armin', age: 21}
       ]
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