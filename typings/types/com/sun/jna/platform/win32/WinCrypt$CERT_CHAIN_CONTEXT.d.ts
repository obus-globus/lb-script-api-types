import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { WinCrypt$CERT_SIMPLE_CHAIN } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_SIMPLE_CHAIN.d.ts'
import type { WinCrypt$CERT_TRUST_STATUS } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_TRUST_STATUS.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinCrypt$CERT_CHAIN_CONTEXT extends Structure {
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
    ChainId: Guid$GUID;
    TrustStatus: WinCrypt$CERT_TRUST_STATUS;
    cChain: number;
    cLowerQualityChainContext: number;
    cbSize: number;
    dwCreateFlags: number;
    dwRevocationFreshnessTime: number;
    fHasRevocationFreshnessTime: boolean;
    rgpChain: Pointer;
    rgpLowerQualityChainContext: Pointer;
    getRgpChain(): WinCrypt$CERT_SIMPLE_CHAIN[];
    getRgpLowerQualityChainContext(): WinCrypt$CERT_CHAIN_CONTEXT[];
}