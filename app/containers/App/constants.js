/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
let serverUrl = '';
let entityUrls = {};
if (process.env.NODE_ENV === 'production') {
  // serverUrl = 'https://esplsol.crm8.dynamics.com/api/data/v8.0/';
  serverUrl = window.parent.Xrm.Page.context.getClientUrl();
  entityUrls = {
    PRODUCTS: 'products',
    QUOTE: 'quote',
    COUNTRIES: 'countries',
  };
}

if (process.env.NODE_ENV === 'development') {
  serverUrl = 'http://localhost:3000/api/';
  entityUrls = {
    PRODUCTS: 'products',
    QUOTE: 'quote',
    COUNTRIES: 'countries',
  };
}
export const SERVER_URL = serverUrl;
export const EntityURLs = entityUrls;
// export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
// export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
// export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
// export const LOAD_DATA = 'app/ApiPage/LOAD_DATA';
// export const LOAD_DATA_SUCCESS = 'app/ApiPage/LOAD_DATA_SUCCESS';
// export const LOAD_DATA_ERROR = 'app/ApiPage/LOAD_DATA_ERROR';
