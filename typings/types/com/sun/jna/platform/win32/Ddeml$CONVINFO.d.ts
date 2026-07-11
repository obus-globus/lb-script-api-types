import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { BaseTSD$DWORD_PTR } from '../../../../../com/sun/jna/platform/win32/BaseTSD$DWORD_PTR.d.ts'
import type { Ddeml$CONVCONTEXT } from '../../../../../com/sun/jna/platform/win32/Ddeml$CONVCONTEXT.d.ts'
import type { Ddeml$HCONV } from '../../../../../com/sun/jna/platform/win32/Ddeml$HCONV.d.ts'
import type { Ddeml$HCONVLIST } from '../../../../../com/sun/jna/platform/win32/Ddeml$HCONVLIST.d.ts'
import type { Ddeml$HSZ } from '../../../../../com/sun/jna/platform/win32/Ddeml$HSZ.d.ts'
import type { WinDef$HWND } from '../../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Ddeml$CONVINFO extends Structure {
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
    ConvCtxt: Ddeml$CONVCONTEXT;
    cb: number;
    hConvList: Ddeml$HCONVLIST;
    hConvPartner: Ddeml$HCONV;
    hUser: BaseTSD$DWORD_PTR;
    hszItem: Ddeml$HSZ;
    hszServiceReq: Ddeml$HSZ;
    hszSvcPartner: Ddeml$HSZ;
    hszTopic: Ddeml$HSZ;
    hwnd: WinDef$HWND;
    hwndPartner: WinDef$HWND;
    wConvst: number;
    wFmt: number;
    wLastError: number;
    wStatus: number;
    wType: number;
    write(): void;
}