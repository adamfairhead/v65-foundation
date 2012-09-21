(function ($) {  

  $(function(){
  
    // Unset Vin65 Tags + Set Foundation Tags
    
    /* Nav Bar in the Header */
    $('.v65-selected').parent().addClass('active');
    $('.primary-links > ul').addClass('nav-bar');
    $('.primary-links > ul ul').addClass('flyout');
    $('.primary-links > ul ul').parent().addClass('has-flyout text-left');
    $('.primary-links .flyout').parent().find('a:first').after('<a href="#" class="flyout-toggle"><span> </span></a>');
    
    /* Add "Back to Top" link in the footer */
    $('.page-footer .nav-bar > li:last-child').after('<li><a href="#">Back to Top</a></li>');
    
    // Remove Breadcrumb container if there is no breadcrumb
    if ($('.breadcrumb-container li').length > 0) {
      } else { $('.breadcrumb-container').remove(); };
    
    /* Breadcrumbs */
    $('.breadcrumb-container ul').addClass('breadcrumbs');
    $('.breadcrumb-container ul li:last').addClass('current');
    $('.breadcrumb-container .current').wrapInner('<span />');
    
    /* Button classes */
    $('a.linkBtn, a.modalLinkBtn, button.modalBtn, button.defaultBtn').removeClass().addClass('small button');
    $('a.linkAltBtn, button.altBtn, a.modalLinkAltBtn, button.altModalBtn').removeClass().addClass('small button secondary');
    $('a.largeLinkBtn, button.largeBtn').removeClass().addClass('large button');
    $('button.altLargeBtn').removeClass().addClass('large button secondary');
    
    /* Remove silly button spans */
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
    $('article > p:first').addClass('lead');

    /* Related Products */
    $('.v65-product-relatedProducts-product .v65-product-title').wrapInner('<h5 />').contents().unwrap();
    $('.v65-product-relatedProducts-product').wrapAll('<li />').contents().unwrap();
    $('.v65-product-relatedProducts').removeClass().addClass('related-products').wrapInner('<ul class="block-grid four-up mobile" />');
    
    /* Recipe list */
    $('.v65-recipe').wrapAll('<ul class="block-grid three-up" />');
    $('.v65-recipe').wrap('<li />');
    
    /* Recipe page layout */
    $('.v65-recipe-drilldown-left').parent().wrapInner('<div class="row" />');
    $('.v65-recipe-drilldown-left').addClass('eight columns');
    $('.v65-recipe-drilldown-right').addClass('four columns');
    
    $('.v65-recipe-drilldown-left').parent().find('h1, header').prependTo('article');
    $('.v65-recipe-drilldown-left').parent().find('.related-products').appendTo('article');
    
    /* General Recipe stuff */
    $('.v65-recipe-title a').wrap('<h3 />');
    $('.v65-recipe-drilldown-subtitle, .v65-product-relatedProducts-title').wrapInner('<h3 />').contents().unwrap();
    $('.related-products h3').prependTo('.related-products');
    $('.v65-calendarList-Description').prevAll('.v65-calendarList-Title ~ *').wrapAll('<div class="meta" />');
    $('.v65-recipe-drilldown-related-products').before('<hr />');
    $('.v65-paging').after('<hr />');
    $('.v65-recipe-drilldown-right').addClass('panel');

    /* Club & Checkout */
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
    $('.club-title a, .v65-calendarList-Title a').wrap('<h3 />');
    $('#v65-fieldset-billingInfo').removeAttr('id').addClass('billing-info');
    $('#v65-checkBilling').removeAttr('id').removeClass().addClass('check-billing');
    $('.check-billing').wrap('<div class="eight columns pull-four" />');
    $('#v65-signUpClubSummaryWrapper, #v65-checkoutCartSummaryWrapper').removeAttr('id').addClass('four columns push-eight').wrapInner('<div class="panel" />');
    $('#v65-clubFormWrapper').removeAttr('id').addClass('row');
    $('#v65-fieldset-shippingInfo').removeAttr('id').addClass('shipping-info');
    $('#v65-fieldset-usernamePassword').removeAttr('id').addClass('username-password');
    $('.floatRight').removeClass().addClass('text-right');
    $('input#Username, input#Password, input#ConfirmPassword').removeAttr('id').removeAttr('style');
    $('#v65-checkoutCartSummaryMini, #v65-checkCartSummaryMoreOptions, #v65-couponFormWrapper, #v65-giftCardFormWrapper, #v65-GiftCode').removeAttr('id');
    $('#v65-cardExpiryMo').parent().addClass('row');
    $('#v65-cardExpiryMo').removeAttr('id').wrap('<div class="six columns" />');
    $('#v65-cardExpiryYr').removeAttr('id').wrap('<div class="six columns" />');
    
    /* Alerts */
    $('.alert').removeClass().addClass('alert-box alert');
    $('.alert-box').append('<a href="" class="close">&times;</a>')
    $('td.alert-box').remove();
    
    /* Events */
    $('.v65-calendarList-Month').wrap('<h2 />').contents().unwrap();
    $('#v65-CalendarEventTable').removeAttr('id').addClass('event-table');
    
    /* Blog */
    $('.v65-blogPost').removeClass().addClass('twelve columns post');
    $('.v65-blogPostWrapper').removeClass().addClass('row post-wrapper');
    $('.v65-avatar').remove();
    $('.v65-blogPostDate').removeClass().addClass('post-date smaller');
    $('.v65-recentEntriesDate, .v65-recentEntriesTitle').removeClass();
    $('.v65-clear, .v65-blogFooter').remove();
    $('.post-wrapper').after('<hr />');
    
    /* General Forms */
    $('.v65-form').removeClass('v65-form');
    $('input').removeAttr('style');
    
    /* Cart */
    $('#v65-CouponCode, #v65-cartShippingStates, #v65-cartSubtotal').removeAttr('id');
    $('#v65-cartCheckOutCoupons').removeAttr('id').addClass('four columns coupons');
    $('.v65-cartCheckOutButtons').removeClass().addClass('checkout eight columns text-right');
    $('.v65-cartItemAmount, .v65-cartItem, .v65-cartItemDescription, .v65-cartItemImage, .v65-cartTax').removeClass();
    $('#v65-cartTable').removeAttr('id').addClass('cart');
    $('#v65-cartTotal').removeAttr('id').addClass('bold');
    
    $('#v65-cartHeader').removeAttr('id').addClass('row cart-header');
    $('#v65-cartFooter').removeAttr('id').addClass('row cart-footer');
    $('#v65-cartPaymentOptions').removeAttr('id').addClass('four columns payment-options');
    
    $('.coupons .row').find(' ').remove();
    $('.coupons fieldset div');
    
    /* Pods */
    $('.v65-pod').wrapInner('<div class="pod panel"></div>').contents().unwrap();
    $('ul .pod').wrap('<li class="pod" />');
    $('.v65-podDescription').removeClass().addClass('pod-description');
    $('.v65-podTitle').wrapInner('<h5 class="pod-title" />').contents().unwrap();
    
    
    
    
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
