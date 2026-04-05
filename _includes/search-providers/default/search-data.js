window.TEXT_SEARCH_DATA={
  'pages':[
    {%- assign _pages = site.pages | where_exp: 'p', 'p.title != nil' | where_exp: 'p', 'p.layout != nil' -%}
    {%- for _page in _pages -%}
    {%- unless forloop.first -%},{%- endunless -%}
    {'title':{{ _page.title | jsonify }},
    {%- include snippets/prepend-baseurl.html path=_page.url -%}
    {%- assign _url = __return -%}
    'url':{{ _url | jsonify }}}
    {%- endfor -%}
  ]
};
