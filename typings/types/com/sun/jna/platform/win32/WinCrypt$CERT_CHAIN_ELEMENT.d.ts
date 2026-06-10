import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinCrypt$CERT_CONTEXT$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_CONTEXT$ByReference.d.ts'
import type { WinCrypt$CERT_REVOCATION_INFO$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_REVOCATION_INFO$ByReference.d.ts'
import type { WinCrypt$CERT_TRUST_STATUS } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_TRUST_STATUS.d.ts'
import type { WinCrypt$CTL_USAGE$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CTL_USAGE$ByReference.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinCrypt$CERT_CHAIN_ELEMENT extends Structure {
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
    constructor(arg0: Pointer)
    TrustStatus: WinCrypt$CERT_TRUST_STATUS;
    cbSize: number;
    pApplicationUsage: WinCrypt$CTL_USAGE$ByReference;
    pCertContext: WinCrypt$CERT_CONTEXT$ByReference;
    pIssuanceUsage: WinCrypt$CTL_USAGE$ByReference;
    pRevocationInfo: WinCrypt$CERT_REVOCATION_INFO$ByReference;
    pwszExtendedErrorInfo: string;
}