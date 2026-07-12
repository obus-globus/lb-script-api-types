import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { LibKstat$Kstat } from '../../../../../../com/sun/jna/platform/unix/solaris/LibKstat$Kstat.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LibKstat$KstatCtl extends Structure {
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
    kc_chain: LibKstat$Kstat;
    kc_chain_id: number;
    kc_kd: number;
}