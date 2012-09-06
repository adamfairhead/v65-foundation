<cfoutput> <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<cf_metaTags>
	
  <cf_vin65GlobalAssets>
  
  <link rel="stylesheet" href="/assets/stylesheets/app.css">
  
	<script src="/assets/javascripts/app.js"></script>
	
	<!-- IE Fix for HTML5 Tags -->
	<!--[if lt IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

</head>

<body class="page has-sidebar">

  <div class="container">
  
    <!-- Tertiary Links -->
    <section class="tertiary-links">
      <div class="limiter">
        <cf_modalCart>	
        <cf_login>	
      </div>
    </div>
    
    
    <!-- Page Header -->
  	<header class="page-header">
  	  <div class="limiter">
  	  
  	    <!-- Logo -->
    	  <a class="logo" href="/"><img src="/assets/images/logo.png" alt="<cf_websiteName>"></a></a>
    	
    	  <!-- Primary Links -->  
  	    <nav class="primary-links">
  	      <cf_layoutHeaderNav depth="2">
  	    </nav>
  	  </div>
  	</header>
  	
  	
    <!-- Content Area -->
  	<div class="page-content">
  	  <div class="limiter">
  	  
  	    <div class="page-main">
      	  <section class="article-wrapper">
      	    <div class="breadcrumb">
      	      <cf_breadCrumbs delimiter="/">
      	    </div>
      	  
        	  <!-- Article -->
        	  <article class="page-article">
        	    <header><h1><cf_pageTitle></h1></header>
        	    <hr>
        	    <cf_mainContent>
        	  </article>
      	  </section>
      	  
      	  <!-- Sidebar -->
          <aside class="sidebar">
            <div class="sidebar-inner">
              <nav>
                <header>
                  <h3><cf_leftNavSectionTitle depth="2"></h3>
                </header>
                <cf_layoutLeftNav>
              </nav>
              
              <div class="kickers">
                <cf_pods location="Kickers" type="description,image">
              </div>
            </div>
          </aside>
        </div>
        
      </div>
  	</div>
  	
  	
    <!-- Page Footer -->
    <footer class="page-footer">
      <div class="limiter">
      
        <!-- Legal -->
        <div class="footer-legal">
          <p><cf_copyright></p>
        </div>
        
        <!-- Footer Links -->
        <div class="footer-links">
          <cf_layoutFooterNav>
          <p>A <a href="http://www.simplyplatformed.com">Simply Platformed</a> Site.</p>
        </div>
        
      </div>
    </footer>
    
  </section>
	
<!---Analytics--->
<cf_googleAnalytics>	
<!---/Analytics--->

<cf_vin65GlobalFooterAssets>

</body>
</html> </cfoutput>
