var posts=["2023/12/06/My-First-Content/","2023/12/06/Second-Blog/","2023/12/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };