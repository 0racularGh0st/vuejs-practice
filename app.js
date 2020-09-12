Vue.component('greeting',{
    template: '<p>This is a reusable component {{name}} <button @click="changeName();">Change Name</button></p>',
    data: function(){
        return {
            name: 'Nigel'
        }
    },
    methods:{
        changeName: function(){
            this.name='David'
        }
    }
});
var one = new Vue({
    el: '#vue-app-one',
    data: {
       title: '1st instance',
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

var two = new Vue({
    el: '#vue-app-two',
    data: {

    },
    methods: {
        changeOneTitle: function(){
            one.title= "1st Vue Instance"
        }
    },
    computed: {

    }
});

