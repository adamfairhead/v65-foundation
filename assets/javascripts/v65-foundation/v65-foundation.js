(function ($) {  

  $(function(){

    // Nav Bar in the Header
    $('.v65-selected').parent().addClass('active');
    $('.primary-links > ul').addClass('nav-bar');
    $('.primary-links > ul ul').addClass('flyout');
    $('.primary-links > ul ul').parent().addClass('has-flyout text-left');
    $('.primary-links .flyout').parent().find('a:first').after('<a href="#" class="flyout-toggle"><span> </span></a>');
  
    // Remove Vertical Nav Sidebar if there is no child pages
    if ($('.sidebar-nav .nav-bar li').length > 0) {
    } else {
    $('.sidebar-nav').remove();
    };
    
    // Add "Back to Top" link in the footer
    $('.page-footer .nav-bar > li:first-child').before('<li><a href="#">Back to Top</a></li>');
    
    // Move Footer Cart to navigation
    $('.page-footer .nav-bar').append('<li class="nav-cart cart-link"></li><li class="nav-account"></li><li class="nav-login"></li>');
    $('.page-footer #v65-toggleModalCart').appendTo($('.nav-cart'));
    $('.page-footer #v65-modalLoginLink-YourAccount').appendTo($('.nav-account'));
    $('.page-footer #v65-modalLoginLink-Login').appendTo($('.nav-login'));
  
    // Remove Breadcrumb container if there is no breadcrumb
    if ($('.breadcrumb-container li').length > 0) {
    } else {
    $('.breadcrumb-container').remove();
    };
    
    // Breadcrumbs
    $('.breadcrumb-container ul').addClass('breadcrumbs');
    $('.breadcrumb-container ul li:last').addClass('current');
    $('.breadcrumb-container .current').wrapInner('<span />');
    
    // Button classes
    $('a.linkBtn, a.modalLinkBtn, button.modalBtn, button.defaultBtn').removeClass().addClass('small button');
    $('a.linkAltBtn, button.altBtn, a.modalLinkAltBtn, button.altModalBtn').removeClass().addClass('small button secondary');
    $('a.largeLinkBtn, button.largeBtn').removeClass().addClass('large button');
    $('button.altLargeBtn').removeClass().addClass('large button secondary');
    
    // Remove silly button spans
    $(".button span").contents().unwrap();
    
    // Product List
    $('.v65-product1Up').wrapAll('<ul class="block-grid one-up mobile" />');
    $('.v65-product2Up').wrapAll('<ul class="block-grid two-up mobile" />');
    $('.v65-product3Up').wrapAll('<ul class="block-grid three-up mobile" />');
    $('.v65-product4Up').wrapAll('<ul class="block-grid four-up mobile" />');
    $('.v65-product5Up').wrapAll('<ul class="block-grid five-up mobile" />');
    $('.v65-product1Up, .v65-product2Up, .v65-product3Up, .v65-product4Up, .v65-product5Up').removeClass().wrapInner('<li />').contents().unwrap();
    $('.v65-product-title').wrapInner('<h3 class="product-title" />').contents().unwrap();
    
    // Product
    $('.v65-productWrapper').addClass('row');
    $('.v65-product-leftCol').addClass('three columns pull-nine');
    $('.v65-product-rightCol').addClass('nine columns push-three').prependTo('.v65-productWrapper');
    //$('.v65-wine-specs-title').wrap('<h2 class="wine-specs-title" />').contents().unwrap();
    $('.v65-product-attributeLabel, .v65-recipe-attributeLabel').wrap('<h6 class="attribute-label" />').contents().unwrap();
    $('.v65-product-attributeValue, .v65-recipe-attributeValue').wrap('<p />').contents().unwrap();
    $('#v65-addProductReview').removeAttr('id').addClass('add-product-review');
    $('.v65-product-availability div').wrap('<h4 />').contents().unwrap();
    //$('.v65-wine-profile-title').wrap('<h2 class="wine-profile-title" />').contents().unwrap();
    //$('.v65-product-reviews-title').wrap('<h2 class="wine-reviews-title" />').contents().unwrap();
      
    $('.v65-wine-profile').before('<div class="product-tabs"><dl class="tabs contained"> <dd class="active"><a href="#specs">Specs</a></dd> <dd><a href="#profile">Profile</a></dd> <dd><a href="#reviews">Reviews</a></dd> </dl> <ul class="tabs-content contained"> <li class="active" id="specsTab"></li> <li id="profileTab"></li> <li id="reviewsTab"></li> </ul></div>');
    $('.v65-productDrilldown-specs').appendTo('#specsTab');
    $('.v65-wine-profile').appendTo('#profileTab');
    $('.v65-product-reviews, .v65-ProductRating').appendTo('#reviewsTab');
    $('.v65-wine-specs-title, .v65-wine-profile-title, .v65-product-reviews-title').remove();
    
    $('.v65-productWrapper .v65-product-photo').addClass('hide-for-small');
    $('.v65-productWrapper .v65-product-photo').clone().prependTo('.v65-product-rightCol').addClass('show-for-small').removeClass('hide-for-small');
    $('.block-grid .v65-product-addToCart').remove();
    
    // General
    $('.v65-customForm').removeClass().addClass('custom-form');
    $('.sidebar-nav > ul').addClass('nav-bar vertical');
    $('.v65-leftSelected, .v65-pageAParent').parent().addClass('active');
    $('.footer-links ul').addClass('link-list right');
    $('.cart-link a').attr('href', '/index.cfm?method=cart.showCart');
    $('article > p:first').addClass('lead');

    // Pagination
    $('.v65-product-pagination ul').addClass('pagination');
    $('.pagination .border').removeClass('border');
    $('.pagination').parent().contents().unwrap();
    $('.pagination').parent().contents().unwrap();
    $('.pagination strong').wrap('<a class="current" href="" />').parent().parent().removeClass().addClass('current');
    $('.pagination li:contains("Of")').addClass('unavailable').wrapInner('<a href="" />');

    // Related Products
    $('.v65-product-relatedProducts-product .v65-product-title').wrapInner('<h5 />').contents().unwrap();
    $('.v65-product-relatedProducts-product').wrapAll('<li />').contents().unwrap();
    $('.v65-product-relatedProducts').removeClass().addClass('related-products').wrapInner('<ul class="block-grid four-up mobile" />');
    $('.eight.columns .related-products ul').removeClass('four-up').addClass('two-up');
    $('.related-products .product-title').wrapInner('<h4 class="product-title related-product-title" />').contents().unwrap();
    
    // Recipe list
    $('.v65-recipe').wrapAll('<ul class="block-grid two-up" />');
    $('.v65-recipe').wrap('<li />');
    $('.v65-recipe-info').removeClass();
    $('.v65-recipe-date, .v65-recipe-teaser').remove();
    
    // Recipe page layout
    $('.v65-recipe-drilldown-left').removeClass().addClass('recipe-left');
    $('.recipe-left').parent().wrapInner('<div class="row" />');
    $('.recipe-left').addClass('eight columns');
    $('.v65-recipe-drilldown-right').addClass('four columns');
    $('.recipe-left').parent().find('h1, header').prependTo('article');
    $('.recipe-left').parent().find('.related-products').before('<hr />');
    $('.recipe-left').parent().find('.related-products, hr').appendTo('article');
        
    // General Recipe stuff
    $('.v65-recipe-title a').wrap('<h3 />');
    $('.v65-recipe-drilldown-subtitle, .v65-product-relatedProducts-title').wrapInner('<h3 />').contents().unwrap();
    $('.related-products h3').prependTo('.related-products');
    $('.v65-calendarList-Description').prevAll('.v65-calendarList-Title ~ *').wrapAll('<div class="meta" />');
    $('.v65-recipe-drilldown-related-products').before('<hr />');
    $('.v65-paging').after('<hr />');

    // Club & Checkout
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
    $('v65-fieldset-shippingOptions').removeAttr('id').addClass('shipping-options');
    $('#v65-fieldset-usernamePassword').removeAttr('id').addClass('username-password');
    $('.floatRight').removeClass().addClass('text-right');
    $('input#Username, input#Password, input#ConfirmPassword').removeAttr('id').removeAttr('style');
    $('#v65-checkoutCartSummaryMini, #v65-checkCartSummaryMoreOptions, #v65-couponFormWrapper, #v65-giftCardFormWrapper, #v65-GiftCode').removeAttr('id');
    //$('#v65-cardExpiryMo').parent().addClass('row');
    //$('#v65-cardExpiryMo').removeAttr('id').wrap('<div class="six columns" />');
    //$('#v65-cardExpiryYr').removeAttr('id').wrap('<div class="six columns" />');
    
    // Alerts
    $('.alert').removeClass().addClass('alert-box alert');
    $('.alert-box').append('<a href="" class="close">&times;</a>')
    $('td.alert-box').remove();
    
    // Events
    $('.v65-calendarList-Month').wrap('<h2 />').contents().unwrap();
    $('#v65-CalendarEventTable').removeAttr('id').addClass('event-table');
    $('.v65-event-upcoming').removeClass().addClass('upcoming-event');
    $('.v65-event-upcoming-title').removeClass().wrapInner('<h2 />').contents().unwrap();
    
    // Blog
    $('.v65-blogPost').removeClass().addClass('twelve columns post');
    $('.v65-blogPostWrapper').removeClass().addClass('row post-wrapper');
    $('.v65-avatar').remove();
    $('.v65-blogPostDate').removeClass().addClass('post-date smaller');
    $('.v65-recentEntriesDate, .v65-recentEntriesTitle').removeClass();
    $('.v65-clear, .v65-blogFooter').remove();
    $('.post-wrapper').after('<hr />');
    
    // General Forms
    $('.v65-form').removeClass('v65-form');
    $('input').removeAttr('style');
    
    // Cart
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
    
    // Pods
    $('.v65-pod').wrapInner('<div class="pod panel"></div>').contents().unwrap();
    $('ul .pod').wrap('<li class="pod" />');
    $('.v65-podDescription').removeClass().addClass('pod-description');
    $('.v65-podTitle').wrapInner('<h5 class="pod-title" />').contents().unwrap();
    $('#v65-subscribeWidget').removeAttr('id').addClass('subscribe-widget');

    // Account
    $('#v65-memberFormWrapper').removeAttr('id').addClass('member-form');
      
  });
  
})(jQuery);