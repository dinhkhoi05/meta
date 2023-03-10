import { isSSR } from './isSSR';

/**
 * Extract the basename from a URL object, which corresponds to the `url_key`
 * property of a Magento 2 GraphQL entity. Mostly used to get the url_key
 * from a recently navigated-to URL.
 *
 * @param {string} url
 * @returns {string} A string for use as the `url_key` in a GraphQL query.
 */
export function getUrlKey(url: string) {
  if (!url && !isSSR) {
    url = window.location.pathname;
  }
  // The URL key is the last path segment.
  // TODO: this may be configurable, but Magento SEO urls appear to always
  // append `.html`, which is not part of the URL key. So strip it.
  const pathname = url.replace(/\.html\/?$/, '');
  return pathname.slice(pathname.lastIndexOf('/') + 1);
}
