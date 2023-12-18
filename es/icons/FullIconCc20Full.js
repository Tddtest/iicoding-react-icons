function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// 为天地立心、为生民立命、为往圣继绝学、为万事开太平

import * as React from 'react';
import FullIconCc20FullSvg from "@iicoding/svg/dist/es/icd/FullIconCc20Full";
import IcdIcon from "../components/IcdIcon";
var FullIconCc20Full = function FullIconCc20Full(props, ref) {
  return /*#__PURE__*/React.createElement(IcdIcon, _extends({}, props, {
    ref: ref,
    icon: FullIconCc20FullSvg
  }));
};
if (process.env.NODE_ENV !== 'production') {
  FullIconCc20Full.displayName = 'FullIconCc20Full';
}
export default /*#__PURE__*/React.forwardRef(FullIconCc20Full);