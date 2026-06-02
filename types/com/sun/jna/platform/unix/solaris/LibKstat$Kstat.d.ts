import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LibKstat$Kstat extends Structure {
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
    static newInstance(paramarg0: Class<Object>): Object | null;
    static newInstance(paramarg0: Class<Object>, paramarg1: Pointer): Object | null;
    constructor()
    ks_class: number[];
    ks_crtime: number;
    ks_data: Pointer;
    ks_data_size: number;
    ks_flags: number;
    ks_instance: number;
    ks_kid: number;
    ks_lock: Pointer;
    ks_module: number[];
    ks_name: number[];
    ks_ndata: number;
    ks_next: Pointer;
    ks_private: Pointer;
    ks_resv: number;
    ks_snapshot: number;
    ks_snaptime: number;
    ks_type: number;
    ks_update: number;
    next(): LibKstat$Kstat;
}