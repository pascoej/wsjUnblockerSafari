const fbURL64 = "https://www.facebook.com/flx/warn/?u=https%3A%2F%2Fwww.wsj.com%2Farticles";
const fbURL = "https://www.facebook.com/flx/warn/?u=https://www.wsj.com/articles";
const followURL = "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.wsj.com%2Farticles";
if (window.location.href.startsWith(fbURL) || window.location.href.startsWith(fbURL64)) {
  const links =  document.body.getElementsByTagName("a");
  for (linkI in links) {
    const link = links[linkI];
    if (link.href && link.href.includes(followURL)) {
      window.location.assign(link.href);
    }
  }
}
