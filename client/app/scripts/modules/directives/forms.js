angular.module('brandid.directives.forms', [])

.directive('editArticleForm', ['$location', function($location) {

  var addLoaderTo = function(element, name, message) {
    element.append('<div id="'+name+'" class="important-white-back opacity-9 loading absolute top" style="width:100%; height:100%;"><div class="v-outer-container" style="height: 100%"><div class="v-inner-container"><div class="v-aligned-content big-top-margin"><span class="muted">' + message + '</span></div></div></div></div>');
  }

  return {
    restrict: 'A',
    scope: {
      articleToSave: "="
    },
    transclude: true,
    templateUrl: "app/scripts/modules/directives/templates/editMonsterForm.html",
    link: function(scope, element, attrs) {

      // need to put a watch here because directive is loaded but Parse promise is not finished loading the monsters yet

      scope.editedArticle = {
        headline: null,
        body: null,
        type: null,
        source: null
      };

      scope.$watch('articleToSave.attributes.headline', function(headline) {
        scope.editedArticle.headline = headline;
      });
      scope.$watch('articleToSave.attributes.body', function(body) {
        scope.editedArticle.body = body;
      });
      scope.$watch('articleToSave.attributes.type', function(type) {
        scope.editedArticle.type = type;
      });
      scope.$watch('articleToSave.attributes.source', function(source) {
        scope.editedArticle.source = source;
      });
      

      scope.saveArticle = function() {

        // put the form in a loading state
        var loadingContainer = $('#loadingContainer');
        addLoaderTo(loadingContainer, 'savingForm', 'Saving');
        element.find('button').attr('disabled','disabled');

        // set the new attributes
        scope.articleToSave.setHeadline(scope.editedArticle.headline);
        scope.articleToSave.setBody(scope.editedArticle.body);
        scope.articleToSave.setType(scope.editedArticle.type);
        scope.articleToSave.setSource(scope.editedArticle.source);

        // perform the save
        scope.articleToSave.save().then(function(article) {

          //remove the loader
          $('#savingForm').remove()

          $location.path('/crud/' + article.id);

        }, function(err) {
          // catch any errors
          alert('Error saving to Parse, check the console and network tab')
          console.log(err)
        });


      }

      // need to do stuff to the element when it is clicked
    }
  }
}])
.directive('newArticleForm', ['$location', function($location) {

  var addLoaderTo = function(element, name, message) {
    element.append('<div id="'+name+'" class="important-white-back opacity-9 loading absolute top" style="width:100%; height:100%;"><div class="v-outer-container" style="height: 100%"><div class="v-inner-container"><div class="v-aligned-content big-top-margin"><span class="muted">' + message + '</span></div></div></div></div>');
  }

  return {
    restrict: 'A',
    transclude: true,
    templateUrl: "app/scripts/modules/directives/templates/newArticleForm.html",
    link: function(scope, element, attrs) {

      // need to put a watch here because directive is loaded but Parse promise is not finished loading the monsters yet

      // scope.editedArticle = {
      //   headline: null,
      //   body: null,
      //   type: null,
      //   source: null
      // };
      scope.articleToSave = {
        headline: scope.editedArticle.headline,
        body: scope.editedArticle.body,
        type: scope.editedArticle.type,
        source: scope.editedArticle.source
      };

      

      scope.saveArticle = function() {

        // put the form in a loading state
        var loadingContainer = $('#loadingContainer');
        addLoaderTo(loadingContainer, 'savingForm', 'Saving');
        element.find('button').attr('disabled','disabled');

        // set the new attributes
        // scope.articleToSave.setHeadline(scope.editedArticle.headline);
        // scope.articleToSave.setBody(scope.editedArticle.body);
        // scope.articleToSave.setType(scope.editedArticle.type);
        // scope.articleToSave.setSource(scope.editedArticle.source);

        // perform the save
        scope.articleToSave.save().then(function(article) {

          //remove the loader
          $('#savingForm').remove()

          $location.path('/crud/' + article.id);

        }, function(err) {
          // catch any errors
          alert('Error saving to Parse, check the console and network tab')
          console.log(err)
        });


      }

      // need to do stuff to the element when it is clicked
    }
  }
}])





