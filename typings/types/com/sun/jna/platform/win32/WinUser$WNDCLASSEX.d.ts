import type { Callback } from '../../../../../com/sun/jna/Callback.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinDef$HBRUSH } from '../../../../../com/sun/jna/platform/win32/WinDef$HBRUSH.d.ts'
import type { WinDef$HCURSOR } from '../../../../../com/sun/jna/platform/win32/WinDef$HCURSOR.d.ts'
import type { WinDef$HICON } from '../../../../../com/sun/jna/platform/win32/WinDef$HICON.d.ts'
import type { WinDef$HINSTANCE } from '../../../../../com/sun/jna/platform/win32/WinDef$HINSTANCE.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinUser$WNDCLASSEX extends Structure {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    cbClsExtra: number;
    cbSize: number;
    cbWndExtra: number;
    hCursor: WinDef$HCURSOR;
    hIcon: WinDef$HICON;
    hIconSm: WinDef$HICON;
    hInstance: WinDef$HINSTANCE;
    hbrBackground: WinDef$HBRUSH;
    lpfnWndProc: Callback;
    lpszClassName: string;
    lpszMenuName: string;
    style: number;
}