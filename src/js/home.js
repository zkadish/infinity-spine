import { routes, onRouterEventHandler } from './router';

const treatmentRoutes = routes.slice(0, 4);
const treatmentBtns = document.querySelectorAll('.treatments__btn');
const testimonialsBtn = document.querySelector('.testimonials__btn button');
const blogPreviewBtns = document.querySelectorAll('.articles-preview__btn');
const blogPreviewImages = document.querySelectorAll('.articles-preview-image img');
const blogPreviewTitles = document.querySelectorAll('.articles-preview__post h2');
const blogPreviewExcerpts = document.querySelectorAll('.articles-preview__excerpt');

fetch('http://infinityspine.com/wp-json/wp/v2/posts?per_page=1')
  .then(response => response.json())
  .then((posts) => {
    // const featuredMedia = posts[1].featured_media;
    const featuredMedia = posts.map(post => post.featured_media);
    // debugger;

    // const blogTitles = posts[1].title.rendered;
    const blogTitles = posts.map(post => post.title.rendered);
    // const blogExcerpt = posts[1].excerpt.rendered;
    const blogExcerpt = posts.map(post => post.excerpt.rendered);

    // blogPreviewTitles[0].innerHTML = blogTitles;
    blogPreviewTitles.forEach((t, i) => {
      const title = t;
      if (!blogTitles[i]) return;
      title.innerHTML = blogTitles[i];
    });

    // const index = blogExcerpt.indexOf('</p>');
    // const html = `${blogExcerpt.slice(0, index)}</p>`;
    // blogPreviewExcerpts[0].innerHTML = html;
    blogPreviewExcerpts.forEach((e, i) => {
      const excerpt = e;
      if (!blogExcerpt[i]) return;
      const index = blogExcerpt[i].indexOf('</p>');
      const html = `${blogExcerpt[i].slice(0, index)}</p>`;
      excerpt.innerHTML = html;
    });

    // fetch(`http://infinityspine.com/wp-json/wp/v2/media/${featuredMedia}`)
    //   .then(response => response.json())
    //   .then(data => data.media_details.sizes.large)
    //   .then((url) => {
    //     blogPreviewImages[0].setAttribute('src', url.source_url);
    //   });

    Promise.all(
      featuredMedia.map(media => fetch(`http://infinityspine.com/wp-json/wp/v2/media/${media}`)
        .then(response => response.json())
        .then(data => data.media_details.sizes.large)),
    ).then((arr) => {
      blogPreviewImages.forEach((img, i) => {
        if (!arr[i]) return undefined;
        return img.setAttribute('src', arr[i].source_url);
      });
    });
  });

// treatments read-more buttons
treatmentBtns.forEach((btn, i) => {
  function treatmentBtnsClickHandler() {
    window.history.pushState(null, null, treatmentRoutes[i]);
    onRouterEventHandler();
  }
  btn.addEventListener('click', treatmentBtnsClickHandler);
});

blogPreviewBtns.forEach((btn, i) => {
  function blogPreviewBtnsClickHandler(e) {
    window.history.pushState(null, null, '#dr-thoma-articles');
    onRouterEventHandler(e, i);
  }
  btn.addEventListener('click', blogPreviewBtnsClickHandler);
});

// testimonials more button
function testimonialsBtnClickHandler() {
  window.history.pushState(null, null, '#more-testimonials');
  onRouterEventHandler();
}
testimonialsBtn.addEventListener('click', testimonialsBtnClickHandler);

const splash01 = document.querySelector('#splash-01');

function matchMedia() {
  if (window.matchMedia('(min-width: 1920px)').matches) {
    // console.log('home.js - desk1920');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1919px) and (min-width: 1600px)').matches) {
    // console.log('home.js - desk1600');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1599px) and (min-width: 1440px)').matches) {
    // console.log('home.js - desk1440');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1439px) and (min-width: 1280px)').matches) {
    // console.log('home.js - desk1280');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1279px) and (min-width: 1024px)').matches) {
    // console.log('home.js - desk1024');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1023px) and (min-width: 864px)').matches) {
    // console.log('home.js - tab864');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 863px) and (min-width: 480px)').matches) {
    // console.log('home.js - pho480');
    // initMobileNavButtons();
    splash01.setAttribute('src', 'img/splash-01-pho480.png');
  }

  if (window.matchMedia('(max-width: 479px) and (min-width: 0px)').matches) {
    // console.log('home.js - phone');
    // initMobileNavButtons();
    splash01.setAttribute('src', 'img/splash-01-pho480.png');
  }
}
matchMedia();

window.onresize = () => {
  matchMedia();
};
