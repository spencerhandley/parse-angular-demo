angular.module('app')

.directive('sortable', function () {
	var linker = function (scope, element, attrs) {
		// var event_ID = scope.eventId;
		// var currentEventID;
		// if(scope.eventId) {
		// 	currentEventID = scope.events[event_ID - 1].event_ID         	
		// }
		// console.log("Curscope", currentEventID)
		element.sortable({
			items: "a",
		    connectWith: ".list",
		    forcePlaceholderSize: false,
		    helper: function(e,li) {
		        copyHelper= li.clone().insertAfter(li);
		        return li.clone();
		    },
		    stop: function() {
		        copyHelper && copyHelper.remove();
		    }
		});
		    $(".list").sortable({
		        receive: function(e,ui) {
		            copyHelper= null;
		        }
		});
	}
		
	return {
		link: linker
	}
});