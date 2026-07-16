import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { NTSecApi$LSA_UNICODE_STRING } from '../../../../../com/sun/jna/platform/win32/NTSecApi$LSA_UNICODE_STRING.d.ts'
import type { WinNT$PSID$ByReference } from '../../../../../com/sun/jna/platform/win32/WinNT$PSID$ByReference.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class NTSecApi$LSA_FOREST_TRUST_DOMAIN_INFO extends Structure {
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
    DnsName: NTSecApi$LSA_UNICODE_STRING;
    NetbiosName: NTSecApi$LSA_UNICODE_STRING;
    Sid: WinNT$PSID$ByReference;
}