import type { WinDef$HWND } from '../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { Rectangle } from '../../../../java/awt/Rectangle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DesktopWindow extends Object {
    constructor(arg0: WinDef$HWND, arg1: string, arg2: string, arg3: Rectangle)
    readonly filePath: string;
    // private hwnd: WinDef$HWND;
    readonly locAndSize: Rectangle;
    readonly title: string;
    getFilePath(): string;
    getHWND(): WinDef$HWND;
    getLocAndSize(): Rectangle;
    getTitle(): string;
}