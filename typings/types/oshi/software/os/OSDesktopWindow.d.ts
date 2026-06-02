import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class OSDesktopWindow extends Object {
    constructor(arg0: number, arg1: string, arg2: string, arg3: Rectangle, arg4: number, arg5: number, arg6: boolean)
    readonly command: string;
    readonly locAndSize: Rectangle;
    readonly order: number;
    readonly owningProcessId: number;
    readonly title: string;
    readonly visible: boolean;
    readonly windowId: number;
    getCommand(): string;
    getLocAndSize(): Rectangle;
    getOrder(): number;
    getOwningProcessId(): number;
    getTitle(): string;
    getWindowId(): number;
    isVisible(): boolean;
    toString(): string;
}