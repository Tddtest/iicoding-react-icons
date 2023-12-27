function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// 为天地立心、为生民立命、为往圣继绝学、为万事开太平

import * as React from 'react';
import Js1ShadowSvg from "@iicoding/svg/dist/es/icd/Js1Shadow";
import IcdIcon from "../components/IcdIcon";
var Js1Shadow = function Js1Shadow(props, ref) {
  return /*#__PURE__*/React.createElement(IcdIcon, _extends({}, props, {
    ref: ref,
    icon: Js1ShadowSvg
  }));
};
if (process.env.NODE_ENV !== 'production') {
  Js1Shadow.displayName = 'Js1Shadow';
}
export default /*#__PURE__*/React.forwardRef(Js1Shadow);