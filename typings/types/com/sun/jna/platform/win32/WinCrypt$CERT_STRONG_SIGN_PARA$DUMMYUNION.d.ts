import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { WTypes$LPSTR } from '../../../../../com/sun/jna/platform/win32/WTypes$LPSTR.d.ts'
import type { WinCrypt$CERT_STRONG_SIGN_PARA } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_STRONG_SIGN_PARA.d.ts'
import type { WinCrypt$CERT_STRONG_SIGN_SERIALIZED_INFO$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_STRONG_SIGN_SERIALIZED_INFO$ByReference.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinCrypt$CERT_STRONG_SIGN_PARA$DUMMYUNION extends Union {
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
    constructor(null_: WinCrypt$CERT_STRONG_SIGN_PARA)
    // private pSerializedInfo: WinCrypt$CERT_STRONG_SIGN_SERIALIZED_INFO$ByReference;
    // private pszOID: WTypes$LPSTR;
    // private pvInfo: Pointer;
}