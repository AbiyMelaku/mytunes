// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function (song) {
      if (!this.at(1)) {  //this.at(0)
        this.playFirst();
      }
    });


    this.on('ended', function() {
      this.remove(this.at(0));
      //plays the first song in the queue if there are any songs left
      if (this.length > 0) {
        this.playFirst();
      }
    });
    
    //when a song is dequeued remove the song
    this.on('dequeue', function(song) {
      this.remove(song);    
    })
  },

  playFirst: function() {
    //play method is from Song model
    this.at(0).play();

  },

  
  
    

});