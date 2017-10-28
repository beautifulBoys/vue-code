import Router from '../router/index.js';

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
