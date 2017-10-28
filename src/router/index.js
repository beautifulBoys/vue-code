function getElement (el) {
  return document.getElementById(el.substr(1));
}

export default function Router (routers, el) {
  for (let i = 0; i < routers.length; i++) {
    if (routers[i].active) {
      getElement(el).innerHTML = routers[i].commponent.template;
    }
  }
};
