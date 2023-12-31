// Seems this is used for iconFont
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
var _ref = require("rc-util/lib/ref");
var _Context = /*#__PURE__*/ _interop_require_default(require("./Context"));
var _utils = require("../utils");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Icon = /*#__PURE__*/ _react.forwardRef(function(props, ref) {
    var // affect outter <i>...</i>
    className = props.className, // affect inner <svg>...</svg>
    Component = props.component, viewBox = props.viewBox, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, // children
    children = props.children, restProps = _object_without_properties(props, [
        "className",
        "component",
        "viewBox",
        "spin",
        "rotate",
        "tabIndex",
        "onClick",
        "children"
    ]);
    var iconRef = _react.useRef();
    var mergedRef = (0, _ref.useComposeRef)(iconRef, ref);
    (0, _utils.warning)(Boolean(Component || children), "Should have `component` prop or `children`.");
    (0, _utils.useInsertStyles)(iconRef);
    var _React_useContext = _react.useContext(_Context.default), _React_useContext_prefixCls = _React_useContext.prefixCls, prefixCls = _React_useContext_prefixCls === void 0 ? "icd-icon" : _React_useContext_prefixCls, rootClassName = _React_useContext.rootClassName;
    var classString = (0, _classnames.default)(rootClassName, prefixCls, className);
    var svgClassString = (0, _classnames.default)(_define_property({}, "".concat(prefixCls, "-spin"), !!spin));
    var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
    } : undefined;
    var innerSvgProps = _object_spread_props(_object_spread({}, _utils.svgBaseProps), {
        className: svgClassString,
        style: svgStyle,
        viewBox: viewBox
    });
    if (!viewBox) {
        delete innerSvgProps.viewBox;
    }
    // component > children
    var renderInnerNode = function() {
        if (Component) {
            return /*#__PURE__*/ _react.createElement(Component, innerSvgProps, children);
        }
        if (children) {
            (0, _utils.warning)(Boolean(viewBox) || _react.Children.count(children) === 1 && /*#__PURE__*/ _react.isValidElement(children) && _react.Children.only(children).type === "use", "Make sure that you provide correct `viewBox`" + " prop (default `0 0 1024 1024`) to the icon.");
            return /*#__PURE__*/ _react.createElement("svg", _object_spread_props(_object_spread({}, innerSvgProps), {
                viewBox: viewBox
            }), children);
        }
        return null;
    };
    var iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }
    return /*#__PURE__*/ _react.createElement("span", _object_spread_props(_object_spread({
        role: "img"
    }, restProps), {
        ref: mergedRef,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString
    }), renderInnerNode());
});
Icon.displayName = "IcdIcon";
var _default = Icon;
