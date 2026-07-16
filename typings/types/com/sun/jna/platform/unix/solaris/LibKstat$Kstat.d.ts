import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export class LibKstat$Kstat extends Structure {
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