// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function() {
    // var that = this;
    // $.ajax({
    //   method: 'GET',
    //   url: 'https://api.parse.com/1/classes/songs/',
    //   data: {limit: 20},
    //   success: function(songs) {
    //     that.results.forEach(function(song) {
    //       that.push(song);

    //     });
        
    //   }
    // });
    

    this.fetch({
      data: {limit: 20}
    });
  },

  parse: function(response) {
    return response.results;
  } 

});