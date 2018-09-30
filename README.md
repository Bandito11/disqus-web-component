![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

![Original Source: Disqus-React](https://github.com/disqus/disqus-react)


# Installation

How to use:

You can ```npm install web-component-disqus``` in your local project and add it to the head of the index.html file like so:

<script src="node_modules/web-component-disqus/dist/disqus.js"></script>

or just add it from UNPKG with local installation required:

<script src="https://unpkg.com/web-component-disqus@0.0.3/dist/disqus.js"></script>


# How to use

When creating a Comment Count just add the shortname and config object from a JavaScript

For example. From this code:
```javascript
var myShortName = 'MyDisqusShortname';
var myConfigObject = {
    identifier: '/path/to/whenever',
    url: 'http://home.myurl'
}
```

```html
    <comment-count shortname="myShortname" config="myConfigObject">
      <p>Comments</p>
    </comment-count>
```

If on the same page you can just reuse the variable and object used above
```html
    <discussion-embed shortname="myShortname" config="myConfigObject" />
```


Basic Usage:

```html
<head>
  <script src="https://unpkg.com/web-component-disqus@0.0.1/dist/disqus.js"></script>
</head>

<body>

  <div id='disqus-commentary'>
    <comment-count shortname="shortname" config="disqus()">
      <p>Comments</p>
    </comment-count>
    <discussion-embed shortname="shortname" config="disqus()" />
  </div>

  <script>
    var shortname = 'myDisqusShortName';
    function disqus() {
      return {
        config: { 
          url: `http://home.myurl`, 
          identifier: `path/to/document`
      }
      }
    }
  </script>
</body>
```
