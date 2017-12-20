import Router from '../router/index.js';
import vue_bind from './data_bind.js';
import vue_object from './do_object.js';
import complite from './complite';

function getActiveComponent (router) {
  let act;
  for (let i = 0; i < router.length; i++) {
    if (router[i].active) {
      act = router[i].commponent;
      break;
    }
  }
  return act;
}

function init (router) {
  let active = getActiveComponent(router);
  active.data = vue_bind(active.data).data;
  active = vue_object(active);


  if (active.beforeCreate) active.beforeCreate();
  if (active.created) active.created();
  if (active.beforeMount) active.beforeMount();
  if (active.mounted) active.mounted();
  if (active.beforeUpdate) active.beforeUpdate();
  if (active.updated) active.updated();
  if (active.beforeDestroy) active.beforeDestroy();
  if (active.destroyed) active.destroyed();

  return router;
}

const Vue = ({el, router, store}) => {
  if (!el || !router) {
    console.log('参数错误');
    return;
  }
  router = init(router);
  Router(router, el);
};

export default Vue;
