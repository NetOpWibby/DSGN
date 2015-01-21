---
layout: post
title:  "Using dashes in Rails 3 routes"
date:   2012-10-22
category: post
---

I stumbled across this solution today, and I&rsquo;m quite proud of myself because nothing broke (yet)! The default separator for URLs in Rails is an underscore. I don&rsquo;t like underscores, at all. They don&rsquo;t seem natural&hellip;some people may not care, but if I&rsquo;m building something, I want full control over how things look.

This is a line in my routes.rb file:

<div>
	<code class="code-ruby">
		<ul>
			<li><span class="code-orange">match</span> <span class="code-green">"business-locator"</span> <span class="code-white">=></span> <span class="code-green">"home#merchants"</span></li>
		</ul>

		<div class="num-bg"></div>
	</code>
</div>

&ldquo;business-locator&rdquo; is the URL that will be appended to &ldquo;http://localhost:3000&rdquo; (for testing on your local machine), and &ldquo;http://yoursite.com&rdquo; for your live site (obviously). &ldquo;home&rdquo; is the folder where the HTML file for &ldquo;merchants&rdquo; is located.

These are lines in my home_controller.rb file:

<div>
	<code class="code-ruby">
		<ul>
			<li><span class="code-yellow">def</span> <span class="code-blue">business_locator</span></li>
			<li class="indent-01"><span class="code-orange">redirect_to</span> <span class="code-green">"/business-locator"</span></li>
			<li><span class="code-yellow">end</span></li>
		</ul>

		<div class="num-bg"></div>
	</code>
</div>

Since Rails will give things underscores anyway, I defined business_locator with a redirect to the URL I want displayed, &ldquo;/business-locator&rdquo;. I am not sure if Rails 3 automatically adds a preceding slash to the URL I want, but it doesn&rsquo;t hurt to include it yourself.

BOOM. I hope this helps another newbie like myself somewhere.