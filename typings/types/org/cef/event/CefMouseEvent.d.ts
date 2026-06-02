import type { Object } from '../../../java/lang/Object.d.ts'
export class CefMouseEvent extends Object {
    static BUTTON1_MASK: number;
    static BUTTON2_MASK: number;
    static BUTTON3_MASK: number;
    static MOUSE_EXIT: number;
    static MOUSE_MOVED: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    button: number;
    clickCount: number;
    id: number;
    modifiers: number;
    x: number;
    y: number;
    getButton(): number;
    getClickCount(): number;
    getID(): number;
    getModifiers(): number;
    getX(): number;
    getY(): number;
}