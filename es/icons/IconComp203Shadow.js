function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// 为天地立心、为生民立命、为往圣继绝学、为万事开太平

import * as React from 'react';
import IconComp203ShadowSvg from "@iicoding/svg/dist/es/icd/IconComp203Shadow";
import IcdIcon from "../components/IcdIcon";
var IconComp203Shadow = function IconComp203Shadow(props, ref) {
  return /*#__PURE__*/React.createElement(IcdIcon, _extends({}, props, {
    ref: ref,
    icon: IconComp203ShadowSvg
  }));
};
if (process.env.NODE_ENV !== 'production') {
  IconComp203Shadow.displayName = 'IconComp203Shadow';
}
export default /*#__PURE__*/React.forwardRef(IconComp203Shadow);