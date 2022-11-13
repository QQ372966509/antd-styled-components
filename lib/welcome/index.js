'use strict';

var React = require('react');
var index_module = require('./index.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Welcome(props) {
    return React__default["default"].createElement("div", { className: index_module.welcome }, "Welcome");
}

module.exports = Welcome;
