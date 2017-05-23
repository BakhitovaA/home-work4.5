var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngResource', 'restangular', 'ui.bootstrap', 'ngMaterial']);

angular.
module('PokemonApp')

.config(['$routeProvider', 'RestangularProvider',
    function config($routeProvider, RestangularProvider) {

        $routeProvider.
        when('/pokemons', {
            template: '<pokemon-list></pokemon-list>'
        }).
        when('/pokemons/:pokemonId', {
            template: '<pokemon-detail></pokemon-detail>'
        }).
        when('/edit/:pokemonId', {
            templateUrl: 'src/EditPokemon/EditPokemon.html',
            controller: 'EditPokemonCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });

        RestangularProvider.setBaseUrl('https://api.backendless.com/v1/data/');

    }
])

.config(['$httpProvider', function($httpProvider) {

    $httpProvider.defaults.headers.common = {
        "application-id": "11AF7AED-8800-15BD-FFAA-D9015E371500",
        "secret-key": "01AD8BC0-A437-AAB0-FF7F-6C32E4FBA700"
    };

}]);
