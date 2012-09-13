/*
Copyright (c) 2012 Brandon Leonardo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
