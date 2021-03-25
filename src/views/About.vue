<template>
<div id="baseReport" >
  <remote-css href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"></remote-css>
<div class="container-fluid">
  <div class="row">
    <div class="col-xs-1">
    </div>
    <div class="col-xs-10">
      <div class="well">
        <h1 class="text-center"><strong>Steve Jobs</strong></h1>
        <h2 class="text-center"><em>The man who changed the moblie phone</em></h2>
        <div class="row ">
          <div class="col-xs-1">
          </div>
          <div class="col-xs-10 white-background">
            <img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Steve_Jobs_WWDC07.jpg">
            <p></p>
            <p class="caption text-center">Steve Jobs at the WWDC 07</p>
          </div>

        </div>
      </div>
      <p></p>
      <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
        <div class="well">
          <h2>Here's a time line of Dr. Borlaug's life:</h2>
          <ul>
            <li><strong>1955</strong> - Born in San Francisco</li>
            <li><strong>1972</strong> - Briefly attended Reed College before dropping out.</li>
            <li><strong>1974</strong> - Traveled through India seeking enlightenment and studying Zen Buddhism.</li>
            <li><strong>1976</strong> - co-founded Apple to sell Wozniak's Apple I personal computer.</li>
            <li><strong>1979</strong> - saw the commercial potential of the Xerox Alto, which was mouse-driven and had a graphical user interface (GUI). This led to development of the unsuccessful Apple Lisa in 1983, followed by the breakthrough Macintosh
              in 1984.</li>
            <li><strong>1985</strong> - Was forced out of Apple, and took a few of its members with him to found NeXT</li>
            <li><strong>1986</strong> -The new company, Pixar, would eventually produce the first fully computer-animated film, Toy Story—an event made possible in part because of Jobs's financial support.
              <li><strong>1997</strong> - Apple acquired and merged NeXT, allowing Jobs to become CEO once again</li>
              <li><strong>2003</strong> - Be diagnosed with a pancreatic neuroendocrine tumor</li>
              <li><strong>2011</strong> - died of respiratory arrest</li>
              <li><strong>1997-2011</strong> -worked closely with designer Jonathan Ive to develop a line of products that would have larger cultural ramifications: the iMac, iTunes and iTunes Store, Apple Store, iPod, iPhone, App Store, and the iPad.</li>
          </ul>
          <blockquote>
            <p>"Steve was my hero growing up. He not only gave me a lot of personal advice and encouragement, he showed all of us how innovation can change lives. I will miss him dearly, as will the world."</p>
            <footer><cite>Yahoo Co-Founder Jerry Yang </cite></footer>
          </blockquote>
          <h3>If you have time, you should read more about this incredible human being on his <a href="https://en.wikipedia.org/wiki/Steve_Jobs">Wikipedia entry.</a></h3>
        </div>
      </div>
    </div>
  </div>
  <footer class="text-center">
    <hr>
    <p>Written and coded by Zhang Peng</p>
  </footer>
</div>
</div>

</template>  

<script>


export default {
  components:{
       'remote-css': {
            render(createElement) {            
              return createElement('link', { attrs: { rel: 'stylesheet', href: this.href }});
            },
            props: {
            href: { type: String, required: true },
            },
        },
        'remote-js': {
            render(createElement) {
              return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});            
            },
            props: {
            src: { type: String, required: true },
            },
        },
    },
    name: "baseReport",
  data() {
    return {
      msg: "关于MMALL"
    };
  },
  methods: {}
};
</script>  

<style>
.silver-background {
  background-color: silver;
}
.white-background {
  background-color: white;
}

</style>