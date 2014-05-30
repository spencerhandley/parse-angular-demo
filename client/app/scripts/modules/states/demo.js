angular.module('brandid.states.demo', ['ParseServices'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider

	.state('demo', {
		abstract: true,
        url: '',
        views: {
            '@': {
                templateUrl: 'app/views/app-layout.html',
            },
            'panel@demo': {
                templateUrl: 'app/views/master-detail.html',
                controller: 'MasterDetailController',
                resolve: {
                    monsters: function() {
                        // get the collection from our data definitions
                        var monsters = new (Parse.Collection.getClass("Monster"));
                        // use the extended Parse SDK to load the whole collection
                        return monsters.fetch();
                    },
                    articles: function() {
                        var articles = new (Parse.Collection.getClass("Article"));

                        return articles.fetch()
                    },
                    events: function() {
                        var events = new (Parse.Collection.getClass("Event"));

                        return events.fetch()
                    }
                }

            }
        }
    })
    .state('demo.crud', {
    	url: '/',
    	views: {
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/crud.list.html',

    		}

    	}
    })
    .state('demo.crud.new', {
        url: 'crud/article/new',
        views: {
            'detail@demo' : {
                templateUrl: 'app/views/detail/crud.new.html',
                controller: 'DetailController'


            }

        }
    })
    .state('demo.crud.detail', {
    	url: 'crud/{monsterId}',
    	views: {
    		
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/crud.detail.html',
                controller: 'DetailController'
    		}

    	}
    })
    .state('demo.crud.list', {
        url: 'crud/{monsterId}/list',
        views: {
            
            'detail@demo' : {
                templateUrl: 'app/views/detail/crud.list.articles.html',
                controller: 'EventArticleController'
            }

        }
    })

    .state('demo.crud.detail.edit', {
        url: '/edit',
        views: {
            'detail@demo' : {
                templateUrl: 'app/views/detail/crud.detail.edit.html',
                controller: 'DetailController'
            }

        }
    })


}])