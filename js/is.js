'use strict';

function isHomeHelper(path) {
  return path==='/index.html' || path==='index.html';
}

function isPostHelper(path) {
  return path==='archives/index.html' || path==='/archives/index.html';
}

function isPageHelper(path) {
  return Boolean(path);
}

function isArchiveHelper() {
  return path==='archives/index.html' || path==='/archives/index.html' || path.includes('archives/');
}

function isCategoryHelper(path) {
  return path.includes('categories/');
}

function isTagHelper(path) {
   return path.includes('tags/');
}
