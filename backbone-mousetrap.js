(function(_, Backbone) {
    _.extend(Backbone.View.prototype, {
        keyboardEvents: {},
        bindKeyboardEvents: function(events) {
            if (! (events || (events = getValue(this, 'keyboardEvents')))) return;
            this.unbindKeyboardEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method)) method = this[events[key]];
                if (!method) throw new Error('Method "' + events[key] + '" does not exist');
                method = _.bind(method, this);
				Mousetrap.bind(key, method);
            }
            return this;
        },
        unbindKeyboardEvents: function() {
            Mousetrap.reset();
            return this;
        }
    });
})(window._, window.Backbone);
