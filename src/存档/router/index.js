
import vue_rander from '../vue/rander.js';

function getElement (el) {
  return document.getElementById(el.substr(1));
}

export default function Router (routers, el) {
  for (let i = 0; i < routers.length; i++) {
    if (routers[i].active) {
      routers[i].commponent = vue_rander(routers[i].commponent);
      getElement(el).innerHTML = routers[i].commponent.template;
    }
  }
};
