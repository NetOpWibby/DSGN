---
layout:   post-thought
title:    "Using dashes in Rails 3 routes"
date:     2012-10-22
category: post
---

I stumbled across this solution today, and I'm quite proud of myself because nothing broke (yet)! The default separator for URLs in Rails is an underscore. I don't like underscores, at all. They don't seem natural...some people may not care, but if I'm building something, I want full control over how things look.

This is a line in my `routes.rb` file:

```rails
match "business-locator" => "home#merchants"
```

`business-locator` is the URL that will be appended to `http://localhost:3000` (for testing on your local machine), and `http://yoursite.com` for your live site (obviously). `home` is the folder where the HTML file for `merchants` is located.

These are lines in my `home_controller.rb` file:

```rails
def business_locator
  redirect_to "/business-locator"
end
```

<!--/ ad /-->

Since Rails will give things underscores anyway, I defined `business_locator` with a redirect to the URL I want displayed, `/business-locator`. I am not sure if Rails 3 automatically adds a preceding slash to the URL I want, but it doesn't hurt to include it yourself.

BOOM. I hope this helps another newbie like myself somewhere.