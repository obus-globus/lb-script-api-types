import type { Rectangle } from '../../../../java/awt/Rectangle.d.ts'
import type { Window } from '../../../../java/awt/Window.d.ts'
export class WindowUtils$HeavyweightForcer extends Window {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static LEFT_ALIGNMENT: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static TOP_ALIGNMENT: number;
    static WIDTH: number;
    static getOwnerlessWindows(): Window[];
    static getWindows(): Window[];
    constructor(arg0: Window)
    // private packed: boolean;
    getBounds(): Rectangle;
    getBounds(arg0: Rectangle): Rectangle;
    isVisible(): boolean;
}