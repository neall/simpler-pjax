(function($) {
  var $content = $('#content');

  // these functions read and set the live title and markup
  var getState = function(){
    return {title: document.title, markup: $content.html()};
  };
  var setState = function(data){
    document.title = data.title;
    $content.html(data.markup);
  };

  // this tells jQuery's event handling to recognize
  // the "state" property of the event
  $.event.props.push('state');
  // handle history events, but test for our stored "state"
  // because some browsers send a useless popstate event
  // on the first page load
  $(window).bind('popstate', function(e){
    e.state && e.state.title && setState(e.state);
  });

  // instead of loading clicked links as normal, ajax call
  // them and push their state into the history
  // (obviously breaks if you have external links)
  $('a').click(function(e){
    var href = $(this).attr('href');
    $.get(href, function(data){
      setState(data);
      history.pushState(getState(), '', href);
    });
    e.preventDefault();
  });

  // This ensures that the first page loaded has the same information
  // stored as the subsequent pages that are loaded through AJAX.
  history.replaceState(getState(), '');

})(jQuery);
