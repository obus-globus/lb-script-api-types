import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { NTSecApi$LSA_FOREST_TRUST_BINARY_DATA } from '../../../../../com/sun/jna/platform/win32/NTSecApi$LSA_FOREST_TRUST_BINARY_DATA.d.ts'
import type { NTSecApi$LSA_FOREST_TRUST_DOMAIN_INFO } from '../../../../../com/sun/jna/platform/win32/NTSecApi$LSA_FOREST_TRUST_DOMAIN_INFO.d.ts'
import type { NTSecApi$LSA_UNICODE_STRING } from '../../../../../com/sun/jna/platform/win32/NTSecApi$LSA_UNICODE_STRING.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class NTSecApi$LSA_FOREST_TRUST_RECORD$UNION extends Union {
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
    Data: NTSecApi$LSA_FOREST_TRUST_BINARY_DATA;
    DomainInfo: NTSecApi$LSA_FOREST_TRUST_DOMAIN_INFO;
    TopLevelName: NTSecApi$LSA_UNICODE_STRING;
}