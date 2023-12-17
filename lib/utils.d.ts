import type { AbstractNode, IconDefinition } from '@iicoding/svg/dist/lib/types';
import React from 'react';
import type { CSSProperties, MouseEventHandler, MutableRefObject, ReactNode } from 'react';
export declare function warning(valid: boolean, message: string): void;
export declare function isIconDefinition(target: any): target is IconDefinition;
export declare function normalizeAttrs(attrs?: Attrs): Attrs;
export type Attrs = Record<string, string>;
interface RootProps {
    onClick: MouseEventHandler<Element>;
    style: CSSProperties;
    ref: MutableRefObject<any>;
    [props: string]: string | number | ReactNode | MouseEventHandler<Element> | CSSProperties | MutableRefObject<any>;
}
export declare function generate(node: AbstractNode, key: string, rootProps?: RootProps | false): any;
export declare function getSecondaryColor(primaryColor: string): string;
export declare function normalizeTwoToneColors(twoToneColor: string | [string, string] | undefined): string[];
export declare const svgBaseProps: {
    width: string;
    height: string;
    fill: string;
    'aria-hidden': string;
    focusable: string;
};
export declare const iconStyles = "\n.icd-icon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icd-icon > * {\n  line-height: 1;\n}\n\n.icd-icon svg {\n  display: inline-block;\n}\n\n.icd-icon::before {\n  display: none;\n}\n\n.icd-icon .icd-icon-icon {\n  display: block;\n}\n\n.icd-icon[tabindex] {\n  cursor: pointer;\n}\n\n.icd-icon-spin::before,\n.icd-icon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
export declare const useInsertStyles: (eleRef: React.RefObject<HTMLElement>) => void;
export {};
