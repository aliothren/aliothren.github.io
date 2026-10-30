---
layout: page
permalink: /publications/
title: publications
heading: Publications
hide_title: true # the two section headings below serve as titles
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h1 class="bibliography-section">Publications</h1>

{% bibliography --query @*[category=publication] %}

<h1 class="bibliography-section">Preprints / Manuscripts</h1>

{% bibliography --query @*[category=preprint] %}

</div>
