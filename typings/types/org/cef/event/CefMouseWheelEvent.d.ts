import type { Object } from '../../../java/lang/Object.d.ts'
export class CefMouseWheelEvent extends Object {
    static WHEEL_BLOCK_SCROLL: number;
    static WHEEL_UNIT_SCROLL: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    amount: number;
    delta: number;
    id: number;
    modifiers: number;
    x: number;
    y: number;
    getModifiers(): number;
    getScrollType(): number;
    getUnitsToScroll(): number;
    getWheelRotation(): number;
    getX(): number;
    getY(): number;
}