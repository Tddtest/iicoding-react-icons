import * as React from 'react';
import type { IconDefinition } from '@iicoding/svg/dist/lib/types';
import type { IconBaseProps } from './Icon';
import { getTwoToneColor, setTwoToneColor } from './twoTonePrimaryColor';
import type { TwoToneColor } from './twoTonePrimaryColor';
export interface IcdIconProps extends Partial<IconBaseProps> {
    twoToneColor?: Partial<TwoToneColor>;
}
export interface IconComponentProps extends IcdIconProps {
    icon: IconDefinition;
}
interface IconBaseComponent<Props> extends React.ForwardRefExoticComponent<Partial<Props> & React.RefAttributes<HTMLSpanElement>> {
    getTwoToneColor: typeof getTwoToneColor;
    setTwoToneColor: typeof setTwoToneColor;
}
declare const Icon: IconBaseComponent<IconComponentProps>;
export default Icon;
