var app = new Vue({
    el: '#usuarios', //elemento alvo

        data: function() {
            return{
                users:[]
            };
        },

        mounted: function() {
            this.loadUsers();
        },

        methods: {
            loadUsers: function(){
                var vm = this;  // ViewModel
                fetch('https://reqres.in/api/users?per_page=10')
                .then(function(retornoJson){
                    return retornoJson.json();
                })
                .then(function(data){
                    vm.users = data.data; 
                });
            }
        }
});
