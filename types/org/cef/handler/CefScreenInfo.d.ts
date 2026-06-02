import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CefScreenInfo extends Object {
    constructor()
    available_height: number;
    available_width: number;
    available_x: number;
    available_y: number;
    depth: number;
    depth_per_component: number;
    device_scale_factor: number;
    height: number;
    is_monochrome: boolean;
    width: number;
    x: number;
    y: number;
    Set(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: Rectangle, arg5: Rectangle): void;
}