import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinDef$HWND } from '../../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { WinDef$LPARAM } from '../../../../../com/sun/jna/platform/win32/WinDef$LPARAM.d.ts'
import type { WinDef$POINT } from '../../../../../com/sun/jna/platform/win32/WinDef$POINT.d.ts'
import type { WinDef$WPARAM } from '../../../../../com/sun/jna/platform/win32/WinDef$WPARAM.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinUser$MSG extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    hWnd: WinDef$HWND;
    lParam: WinDef$LPARAM;
    message: number;
    pt: WinDef$POINT;
    time: number;
    wParam: WinDef$WPARAM;
}