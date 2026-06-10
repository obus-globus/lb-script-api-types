import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinCrypt$CERT_CHAIN_ELEMENT } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_CHAIN_ELEMENT.d.ts'
import type { WinCrypt$CERT_TRUST_LIST_INFO$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_TRUST_LIST_INFO$ByReference.d.ts'
import type { WinCrypt$CERT_TRUST_STATUS } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_TRUST_STATUS.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinCrypt$CERT_SIMPLE_CHAIN extends Structure {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    TrustStatus: WinCrypt$CERT_TRUST_STATUS;
    cElement: number;
    cbSize: number;
    dwRevocationFreshnessTime: number;
    fHasRevocationFreshnessTime: boolean;
    pTrustListInfo: WinCrypt$CERT_TRUST_LIST_INFO$ByReference;
    rgpElement: Pointer;
    getRgpElement(): WinCrypt$CERT_CHAIN_ELEMENT[];
}