(function ($) {  

  $(function(){

    $('.v65-selected').parent().addClass('active');
    $('.primary-links > ul').addClass('nav-bar');
    $('.primary-links > ul ul').addClass('flyout');
    $('.primary-links > ul ul').parent().addClass('has-flyout text-left');
    $('.primary-links > ul > ul').parent().find('a').after('<a href="#" class="flyout-toggle"><span></span></a>');
    $('.footer-links > ul > li:last-child').after('<li><a href="#">Back to Top</a></li>');
    $('article > p:first').addClass('lead');
    
    $(document).foundationAlerts();
    $(document).foundationButtons();
    $(document).foundationAccordion();
    $(document).foundationNavigation();
    $(document).foundationCustomForms();
    $(document).foundationMediaQueryViewer();
    $(document).foundationTabs({callback:$.foundation.customForms.appendCustomMarkup});
    
    $(document).tooltips();
    $('input, textarea').placeholder();
    
    $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
    $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
    $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
    $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});
  
    
    
    
  });
  
})(jQuery);
