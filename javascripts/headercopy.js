document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

  Array.from(headers).forEach(function (element) {
    element.addEventListener("click", onClickHeader, false);
  });

  const links = document.getElementsByClassName("headerlink");

  Array.from(links).forEach(function (element) {
    element.addEventListener("click", onClickLink, false);
  });
});

function onClickLink() {
  setTimeout(function () {
    const url = window.location.href;
    copyText(url);
  }, 10);
}

function onClickHeader(event) {
  const text = event.currentTarget.innerText;
  copyText(text.slice(0, -1));
}

function copyText(text) {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }

  return Promise.reject("The Clipboard API is not available.");
}
