"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    generate: function() {
        return generate;
    },
    getSecondaryColor: function() {
        return getSecondaryColor;
    },
    iconStyles: function() {
        return iconStyles;
    },
    isIconDefinition: function() {
        return isIconDefinition;
    },
    normalizeAttrs: function() {
        return normalizeAttrs;
    },
    normalizeTwoToneColors: function() {
        return normalizeTwoToneColors;
    },
    svgBaseProps: function() {
        return svgBaseProps;
    },
    useInsertStyles: function() {
        return useInsertStyles;
    },
    warning: function() {
        return warning;
    }
});
var _colors = require("@ant-design/colors");
var _dynamicCSS = require("rc-util/lib/Dom/dynamicCSS");
var _shadow = require("rc-util/lib/Dom/shadow");
var _warning = /*#__PURE__*/ _interop_require_default(require("rc-util/lib/warning"));
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _Context = /*#__PURE__*/ _interop_require_default(require("./components/Context"));
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
function camelCase(input) {
    return input.replace(/-(.)/g, function(match, g) {
        return g.toUpperCase();
    });
}
function warning(valid, message) {
    (0, _warning.default)(valid, "[@iicoding/react-icons] ".concat(message));
}
function isIconDefinition(target) {
    return typeof target === "object" && typeof target.name === "string" && typeof target.theme === "string" && (typeof target.icon === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
        var val = attrs[key];
        switch(key){
            case "class":
                acc.className = val;
                delete acc.class;
                break;
            default:
                delete acc[key];
                acc[camelCase(key)] = val;
        }
        return acc;
    }, {});
}
function generate(node, key, rootProps) {
    if (!rootProps) {
        return _react.default.createElement(node.tag, _object_spread({
            key: key
        }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
            return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
        }));
    }
    return _react.default.createElement(node.tag, _object_spread({
        key: key
    }, normalizeAttrs(node.attrs), rootProps), (node.children || []).map(function(child, index) {
        return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
}
function getSecondaryColor(primaryColor) {
    // choose the second color
    return (0, _colors.generate)(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
        return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [
        twoToneColor
    ];
}
var svgBaseProps = {
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    focusable: "false"
};
var iconStyles = "\n.icd-icon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icd-icon > * {\n  line-height: 1;\n}\n\n.icd-icon svg {\n  display: inline-block;\n}\n\n.icd-icon::before {\n  display: none;\n}\n\n.icd-icon .icd-icon-icon {\n  display: block;\n}\n\n.icd-icon[tabindex] {\n  cursor: pointer;\n}\n\n.icd-icon-spin::before,\n.icd-icon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function(eleRef) {
    var _useContext = (0, _react.useContext)(_Context.default), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
    var mergedStyleStr = iconStyles;
    if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/icd-icon/g, prefixCls);
    }
    (0, _react.useEffect)(function() {
        var ele = eleRef.current;
        var shadowRoot = (0, _shadow.getShadowRoot)(ele);
        (0, _dynamicCSS.updateCSS)(mergedStyleStr, "@iicoding-react-icons", {
            prepend: true,
            csp: csp,
            attachTo: shadowRoot
        });
    }, []);
};
