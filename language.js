// Translations object:
var translations = {
    'en': {
      'home': 'Home',
      'back': 'Back'
      /* ... */
    },
    'zh': {
      'home': 'Pradžia',
      'back': 'Atgal'
      /* ... */
    }
  };
  
  
  // wait for all DOM elements to load
  $(document).ready(function() {
  
    // when button is clicked
    $('.lang-btn').click(function() {
      // take translations subset
      var lang = translations[$(this).data('lang')];
  
      // for each element that has "data-key" attribute
      $('[data-key]').each(function() {
  
        // change it's content to other language
        $(this).text(lang[$(this).data('key')]);
      })
    });