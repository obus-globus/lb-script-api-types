import type { Object } from '../../../java/lang/Object.d.ts'
export class CefKeyEvent extends Object {
    static KEY_PRESS: number;
    static KEY_RELEASE: number;
    static KEY_TYPE: number;
    constructor(arg0: number, arg1: number, arg2: string, arg3: number)
    id: number;
    keyChar: string;
    keyCode: number;
    modifiers: number;
    scancode: number;
    getID(): number;
    getKeyChar(): string;
    getKeyCode(): number;
    getModifiers(): number;
}