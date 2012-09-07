(function ($) {  

  $(function(){
    /* Navigation */
    $('.v65-selected').parent().addClass('active');
    $('.primary-links > ul').addClass('nav-bar');
    $('.primary-links > ul ul').addClass('flyout');
    $('.primary-links > ul ul').parent().addClass('has-flyout text-left');
    $('.primary-links .flyout').parent().find('a:first').after('<a href="#" class="flyout-toggle"><span> </span></a>');
    $('.page-footer .nav-bar > li:last-child').after('<li><a href="#">Back to Top</a></li>');
    $('article > p:first').addClass('lead');
    
    /* Breadcrumbs */
    $('.breadcrumb-container ul').addClass('breadcrumbs');
    $('.breadcrumb-container ul li:last').addClass('current');
    $('.breadcrumb-container .current').wrapInner('<span />');
    
    /* Buttons */
    $('a.linkBtn, a.linkAltBtn, button.altBtn, a.modalLinkBtn, a.modalLinkAltBtn, button.modalBtn, button.altModalBtn, button.defaultBtn').removeClass().addClass('small button');
    $('a.largeLinkBtn, button.altLargeBtn, button.largeBtn').removeClass().addClass('large button');
    $('a.linkAltBtn, button.altBtn, button.altLargeBtn, a.modalLinkAltBtn, button.altModalBtn').addClass('secondary');
    $(".button span").contents().unwrap();
    
    /* Product Lists */
    $('.v65-product1Up').wrapAll('<ul class="block-grid one-up mobile" />');
    $('.v65-product2Up').wrapAll('<ul class="block-grid two-up mobile" />');
    $('.v65-product3Up').wrapAll('<ul class="block-grid three-up mobile" />');
    $('.v65-product4Up').wrapAll('<ul class="block-grid four-up mobile" />');
    $('.v65-product5Up').wrapAll('<ul class="block-grid five-up mobile" />');
    $('.v65-product1Up, .v65-product2Up, .v65-product3Up, .v65-product4Up, .v65-product5Up').removeClass().wrapInner('<li />').contents().unwrap();
    
    /* General */
    $('.v65-customForm').removeClass().addClass('custom-form');
    $('.sidebar-nav > ul').addClass('nav-bar vertical');
    $('.v65-leftSelected, .v65-pageAParent').parent().addClass('active');
    $('.footer-links ul').addClass('link-list right');
    $('.cart-link a').attr('href', '/index.cfm?method=cart.showCart');

    /* Related Products */
    $('.v65-product-relatedProducts-product .v65-product-title').wrapInner('<h5 />').contents().unwrap();
    $('.v65-product-relatedProducts-product').wrapAll('<li />').contents().unwrap();
    $('.v65-product-relatedProducts').removeClass().addClass('related-products').wrapInner('<ul class="block-grid four-up mobile" />');
    
    /* Recipe */
    $('.v65-recipe-title a').wrap('<h3 />');
    $('.v65-recipe-drilldown-subtitle, .v65-product-relatedProducts-title').wrapInner('<h3 />').contents().unwrap();
    $('.v65-calendarList-Description').prevAll('.v65-calendarList-Title ~ *').wrapAll('<div class="meta" />')
    $('.v65-recipe-drilldown-related-products').before('<hr />');
    $('.v65-paging').after('<hr />');
    $('.v65-recipe-drilldown-right').addClass('panel');

    /* Club */
    $('.v65-club').removeClass().addClass('club');
    $('.v65-clubTitle').removeClass().addClass('club-title');
    $('.v65-clubTeaser').removeClass().addClass('club-teaser');
    $('.v65-clubJoin').removeClass().addClass('club-join');
    $('.v65-clubSignUp-Teaser').removeClass().addClass('club-signup-teaser');
    $('.v65-additionalComments').removeClass().addClass('additional-comments');
    $('#v65-fieldset-paymentMethod').removeAttr('id').addClass('payment-method');
    $('#v65-clubCreditCard').removeAttr('id').addClass('club-creditcard');
    $('#v65-checkoutFooter').removeAttr('id').addClass('checkout-footer');
    $('#v65-checkoutSecure').removeAttr('id').addClass('secure');
    $('#v65-billingInformation').removeAttr('id').addClass('billing-info');
    $('.club-teaser').after('<hr />');
    $('.club-title a, .v65-calendarList-Title a').wrap('<h2 />');
    $('#v65-fieldset-billingInfo').removeAttr('id').addClass('billing-info');
    $('#v65-checkBilling').removeAttr('id').removeClass().addClass('check-billing');
    $('.check-billing').wrap('<div class="eight columns pull-four" />');
    $('#v65-signUpClubSummaryWrapper').removeAttr('id').addClass('four columns push-eight').wrapInner('<div class="panel" />');
    $('#v65-clubFormWrapper').removeAttr('id').addClass('row');
    $('#v65-fieldset-shippingInfo').removeAttr('id').addClass('shipping-info');
    $('#v65-fieldset-usernamePassword').removeAttr('id').addClass('username-password');
    $('.floatRight').removeClass().addClass('text-right');
    $('input#Username, input#Password, input#ConfirmPassword').removeAttr('id').removeAttr('style');

    /* Foundation */
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
