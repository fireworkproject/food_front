import React from 'react';

const FoodList = React.lazy(()=> import('./views/Foods/List'));
const FoodCreate = React.lazy(()=> import('./views/Foods/Create'));
const FoodUpdate = React.lazy(()=> import('./views/Foods/Update'));

const ItSiteFoodList = React.lazy(()=> import('./views/ItSiteFood/ItSiteList'));
const ItSiteDetail = React.lazy(()=> import('./views/ItSiteFood/ItSiteDetail'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/food',  exact: true, name: 'FoodList', component: FoodList },
  { path: '/food/list', name: 'FoodList', component: FoodList },
  { path: '/food/insert', name: 'Create Food', component: FoodCreate },
  { path: '/food/update/:id', name: 'Update Food', component: FoodUpdate },
  { path: '/itsite/list', name: 'ItSite List', component: ItSiteFoodList},
  { path: '/itsite/:id', name: 'ItSite Detail', component: ItSiteDetail}

];

export default routes;
