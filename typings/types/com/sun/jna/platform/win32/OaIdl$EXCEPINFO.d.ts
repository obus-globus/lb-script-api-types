import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { OaIdl$EXCEPINFO$ByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$EXCEPINFO$ByReference.d.ts'
import type { WTypes$BSTR } from '../../../../../com/sun/jna/platform/win32/WTypes$BSTR.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$PVOID } from '../../../../../com/sun/jna/platform/win32/WinDef$PVOID.d.ts'
import type { WinDef$SCODE } from '../../../../../com/sun/jna/platform/win32/WinDef$SCODE.d.ts'
import type { WinDef$WORD } from '../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OaIdl$EXCEPINFO extends Structure {
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
    bstrDescription: WTypes$BSTR;
    bstrHelpFile: WTypes$BSTR;
    bstrSource: WTypes$BSTR;
    dwHelpContext: WinDef$DWORD;
    pfnDeferredFillIn: OaIdl$EXCEPINFO$ByReference;
    pvReserved: WinDef$PVOID;
    scode: WinDef$SCODE;
    wCode: WinDef$WORD;
    wReserved: WinDef$WORD;
}