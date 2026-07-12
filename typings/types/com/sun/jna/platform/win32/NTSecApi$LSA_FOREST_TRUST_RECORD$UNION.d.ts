import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { NTSecApi$LSA_FOREST_TRUST_BINARY_DATA } from '../../../../../com/sun/jna/platform/win32/NTSecApi$LSA_FOREST_TRUST_BINARY_DATA.d.ts'
import type { NTSecApi$LSA_FOREST_TRUST_DOMAIN_INFO } from '../../../../../com/sun/jna/platform/win32/NTSecApi$LSA_FOREST_TRUST_DOMAIN_INFO.d.ts'
import type { NTSecApi$LSA_UNICODE_STRING } from '../../../../../com/sun/jna/platform/win32/NTSecApi$LSA_UNICODE_STRING.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NTSecApi$LSA_FOREST_TRUST_RECORD$UNION extends Union {
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
    Data: NTSecApi$LSA_FOREST_TRUST_BINARY_DATA;
    DomainInfo: NTSecApi$LSA_FOREST_TRUST_DOMAIN_INFO;
    TopLevelName: NTSecApi$LSA_UNICODE_STRING;
}