import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { BaseTSD$ULONG_PTR } from '../../../../../com/sun/jna/platform/win32/BaseTSD$ULONG_PTR.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$LONG } from '../../../../../com/sun/jna/platform/win32/WinDef$LONG.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinUser$MOUSEINPUT extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    dwExtraInfo: BaseTSD$ULONG_PTR;
    dwFlags: WinDef$DWORD;
    dx: WinDef$LONG;
    dy: WinDef$LONG;
    mouseData: WinDef$DWORD;
    time: WinDef$DWORD;
}