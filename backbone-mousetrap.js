(function(_, Backbone) {
    _.extend(Backbone.View.prototype, {
        keyboardEvents: {},
        bindKeyboardEvents: function(events) {
			if (!(events || (events = getValue(this, 'keyboardEvents')))) return;
			_.each(this.events, function (event, callback) {
				Mousetrap.bind(event, callback);
			})
            return this;
        },
        unbindKeyboardEvents: function() {
			Mousetrap.reset();
            return this;
        }
    });
})(window._, window.Backbone);
