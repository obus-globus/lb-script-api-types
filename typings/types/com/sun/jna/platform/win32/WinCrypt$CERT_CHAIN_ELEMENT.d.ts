import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinCrypt$CERT_CONTEXT$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_CONTEXT$ByReference.d.ts'
import type { WinCrypt$CERT_REVOCATION_INFO$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_REVOCATION_INFO$ByReference.d.ts'
import type { WinCrypt$CERT_TRUST_STATUS } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_TRUST_STATUS.d.ts'
import type { WinCrypt$CTL_USAGE$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CTL_USAGE$ByReference.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinCrypt$CERT_CHAIN_ELEMENT extends Structure {
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
    constructor(arg0: Pointer)
    TrustStatus: WinCrypt$CERT_TRUST_STATUS;
    cbSize: number;
    pApplicationUsage: WinCrypt$CTL_USAGE$ByReference;
    pCertContext: WinCrypt$CERT_CONTEXT$ByReference;
    pIssuanceUsage: WinCrypt$CTL_USAGE$ByReference;
    pRevocationInfo: WinCrypt$CERT_REVOCATION_INFO$ByReference;
    pwszExtendedErrorInfo: string;
}