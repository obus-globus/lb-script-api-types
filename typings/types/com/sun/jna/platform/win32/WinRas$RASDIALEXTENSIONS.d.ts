import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { BaseTSD$ULONG_PTR } from '../../../../../com/sun/jna/platform/win32/BaseTSD$ULONG_PTR.d.ts'
import type { WinDef$BOOL } from '../../../../../com/sun/jna/platform/win32/WinDef$BOOL.d.ts'
import type { WinDef$HWND } from '../../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { WinRas$RASDEVSPECIFICINFO } from '../../../../../com/sun/jna/platform/win32/WinRas$RASDEVSPECIFICINFO.d.ts'
import type { WinRas$RASEAPINFO } from '../../../../../com/sun/jna/platform/win32/WinRas$RASEAPINFO.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinRas$RASDIALEXTENSIONS extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Object>): Object | null;
    static newInstance(paramarg0: Class<Object>, paramarg1: Pointer): Object | null;
    constructor()
    constructor(arg0: Pointer)
    RasDevSpecificInfo: WinRas$RASDEVSPECIFICINFO;
    RasEapInfo: WinRas$RASEAPINFO;
    dwSize: number;
    dwfOptions: number;
    fSkipPppAuth: WinDef$BOOL;
    hwndParent: WinDef$HWND;
    reserved: BaseTSD$ULONG_PTR;
    reserved1: BaseTSD$ULONG_PTR;
}