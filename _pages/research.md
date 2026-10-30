---
layout: page
permalink: /research/
title: research
heading: Research
description:
nav: true
nav_order: 3
---

<div class="row research-layout">
  <div class="col-md-8 research-main">
    <h2>Projects</h2>
    {% include research_highlights.liquid %}
  </div>

  <div class="col-md-4 research-side">
    {% if site.data.repositories.github_users or site.data.repositories.github_repos %}
      <h2>Repositories</h2>
      <div class="repositories">
        {% for user in site.data.repositories.github_users %}
          {% include repository/repo_user.liquid username=user %}
        {% endfor %}
        {% for repo in site.data.repositories.github_repos %}
          {% include repository/repo.liquid repository=repo %}
        {% endfor %}
      </div>
    {% endif %}
  </div>
</div>
