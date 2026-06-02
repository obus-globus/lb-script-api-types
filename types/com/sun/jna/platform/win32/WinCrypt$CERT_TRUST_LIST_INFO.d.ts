import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinCrypt$CTL_CONTEXT$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CTL_CONTEXT$ByReference.d.ts'
import type { WinCrypt$CTL_ENTRY$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CTL_ENTRY$ByReference.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinCrypt$CERT_TRUST_LIST_INFO extends Structure {
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
    cbSize: number;
    pCtlContext: WinCrypt$CTL_CONTEXT$ByReference;
    pCtlEntry: WinCrypt$CTL_ENTRY$ByReference;
}