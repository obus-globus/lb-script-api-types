import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { NTSecApi$PLSA_FOREST_TRUST_RECORD } from '../../../../../com/sun/jna/platform/win32/NTSecApi$PLSA_FOREST_TRUST_RECORD.d.ts'
import type { NTSecApi$PLSA_FOREST_TRUST_RECORD$ByReference } from '../../../../../com/sun/jna/platform/win32/NTSecApi$PLSA_FOREST_TRUST_RECORD$ByReference.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class NTSecApi$LSA_FOREST_TRUST_INFORMATION extends Structure {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    Entries: NTSecApi$PLSA_FOREST_TRUST_RECORD$ByReference;
    RecordCount: number;
    getEntries(): NTSecApi$PLSA_FOREST_TRUST_RECORD[];
}