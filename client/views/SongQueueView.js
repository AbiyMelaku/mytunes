// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    //tagname
    tagname: 'table',

    this.collection.on('add remove', this.render, this);


  },
//creates SongQueueEntryViews for each queued song & renders them
  render: function() {
    //some backbone source code and in all the parent views I see the following line of code:
    this.$el.children().detach(); //optional?????
     //The .detach() method is the same as .remove(), except that .detach() 
    //keeps all jQuery data associated with the removed elements. 
    //This method is useful when removed elements are to be 
    //reinserted into the DOM at a later time.

    this.$el.html('<th>Song Queue</th>').append(this.collection.map(function(song) {
      return new SongQueueEntryView({model: song}).render();//expected render to have been called at least once, but it was never called
    }));

    //return this.$el;
  }
// this.$el.find('ul').append(this.collection.map(function(comment) {
//       // YOUR CODE HERE
//       console.log(comment);
//       return '<li>' + comment.get('message') + '   --------------------------' + comment.get('votes') + '</li>'
//     }));
//     return this.$el;
//   }
});
