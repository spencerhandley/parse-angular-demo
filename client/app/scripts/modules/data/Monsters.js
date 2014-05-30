// we isolate our data module so we can reuse them independently
angular.module('brandid.models.Monsters', ['parse-angular.enhance'])
.run(function() {

	// --------------------------
	// Monster Object Definition
	// --------------------------

	// Under the hood, everytime you fetch a Monster object from Parse,
	// the SDK will natively use this extended class, so you don't have to 
	// worry about objects instantiation if you fetch them from a Parse query for instance
	var Event = Parse.Object.extend({
		className:"Event",
		attrs: ['id', 'eventName', 'stories']
	});

	var Article = Parse.Object.extend({
		className:"Article",
		attrs: ['id', 'headline', 'body', 'type', 'source']
	});



	var Monster = Parse.Object.extend({
		className:"Monster",
		// Extend the object with getter and setters  (see parse-angular-patch GitHub repo)
		attrs: ["name", "reason"]
	});


	// --------------------------
	// Monster Collection Definition
	// --------------------------
	var Articles = Parse.Collection.extend({
		model: Article,
		className: "Article",
		comparator: function(model) {
			return -model.createdAt.getTime();
		},
		loadArticleWithId: function(id) {
			this.query = (new Parse.Query(Event));
			this.query.equalTo('id', id);
			return this.find();
		},
		addArticle: function(headline, body, type, source) {
	 		// save request_id to Parse
	 		var _this = this;

	 		var article = new Article;
	 		article.setHeadline(headline);
	 		article.setBody(body);
	 		article.setType(type);
	 		article.setSource(source);
			// perform a save and return the promised object back into the Angular world
			return article.save().then(function(object){
				// here object === monster basically
				_this.add(object);
				return object;
			})
	 	},
	 	removeArticle: function(art) {
	 		if (!this.get(art)) return false;
	 		var _this = this;
	 		return art.destroy().then(function(){
	 			_this.remove(art);
	 		});
	 	}
	})
	var Events = Parse.Collection.extend({
		model: Event,

		className: "Event",
		comparator: function(model) {
			return -model.createdAt.getTime();
		},
		loadEventWithId: function(id) {
			this.query = (new Parse.Query(Event));
			this.query.equalTo('id', id);
			return this.find();
		},
		addEvent: function(id, eventName, stories) {
	 		// save request_id to Parse
	 		var _this = this;

			var newEvent = new Event;
			newEvent.setId(id);
			newEvent.setEventName(eventName);
			newEvent.setStories(stories);


			// perform a save and return the promised object back into the Angular world
			return newEvent.save().then(function(object){
				// here object === monster basically
				_this.add(object);
				return object;
			})
	 	},
	 	removeEvent: function(evt) {
	 		if (!this.get(evt)) return false;
	 		var _this = this;
	 		return evt.destroy().then(function(){
	 			_this.remove(evt);
	 		});
	 	},
	 	addArticleToEvent: function (evt, articleId, headline, body, type, source) {
			// if (!this.get(evt)) return false;
	 		var _this = this;
	 		var targetEvent = evt;

	 		var article = new Article;
	 		article.setId(articleId);
	 		article.setHeadline(headline);
	 		article.setBody(body);
	 		article.setType(type);
	 		article.setSource(source);

	 		return article.save().then(function(object){
	 			_this[evt][stories].add(Object)
	 		})
	 		
	 	}

	})

	var Monsters = Parse.Collection.extend({
		model: Monster,
		// We give a className to be able to retrieve the collection
		// from the getClass helper. See parse-angular-patch git repo
		className: "Monster",
		comparator: function(model) {
			return -model.createdAt.getTime();
		},
		loadMonstersWithName: function(name) {
			this.query = (new Parse.Query(Monster));
			this.query.equalTo('name', name);
			// use the enhanced load() function to fetch the collection
			return this.find();
		},
		addMonster: function(name, reason) {
	 		// save request_id to Parse
	 		var _this = this;

			var monster = new Monster;
			monster.setName(name);
			monster.setReason(reason);

			// perform a save and return the promised object back into the Angular world
			return monster.save().then(function(object){
				// here object === monster basically
				_this.add(object);
				return object;
			})
	 	},
	 	removeMonster:function(monster) {
	 		if (!this.get(monster)) return false;
	 		var _this = this;
	 		return monster.destroy().then(function(){
	 			_this.remove(monster);
	 		});
	 	}
	});


});