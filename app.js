new Vue({
    el: '#vue-app',
    data: {
        name: 'Nigel',
        website: 'https://www.google.com',
        websiteTag: '<a href="https://www.google.com">Go to Google</a>'
    },
    methods: {
        greet : function(){
            return 'Good Afternoon';
        }
    }
});