---
title: 'hello world'
layout: 'base.njk'
templateEngineOverride: njk,md
---

This is a homepage.

## my writings

<ul>
{% for post in collections.posts %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>

## Cat of the Day
