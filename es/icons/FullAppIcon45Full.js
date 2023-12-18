function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// 为天地立心、为生民立命、为往圣继绝学、为万事开太平

import * as React from 'react';
import FullAppIcon45FullSvg from "@iicoding/svg/dist/es/icd/FullAppIcon45Full";
import IcdIcon from "../components/IcdIcon";
var FullAppIcon45Full = function FullAppIcon45Full(props, ref) {
  return /*#__PURE__*/React.createElement(IcdIcon, _extends({}, props, {
    ref: ref,
    icon: FullAppIcon45FullSvg
  }));
};
if (process.env.NODE_ENV !== 'production') {
  FullAppIcon45Full.displayName = 'FullAppIcon45Full';
}
export default /*#__PURE__*/React.forwardRef(FullAppIcon45Full);