import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Perfstat$perfstat_process_t extends Structure {
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
    filepages: number;
    heap_size: number;
    inBytes: number;
    inOps: number;
    last_timebase: number;
    num_threads: number;
    outBytes: number;
    outOps: number;
    pgsp_inuse: number;
    pid: number;
    pinned: number;
    pinned_inuse_map: number;
    proc_classid: number;
    proc_name: number[];
    proc_priority: number;
    proc_real_mem_data: number;
    proc_real_mem_text: number;
    proc_size: number;
    proc_uid: number;
    proc_virt_mem_data: number;
    proc_virt_mem_text: number;
    real_inuse: number;
    real_inuse_map: number;
    scpu_time: number;
    shared_lib_data_size: number;
    ucpu_time: number;
    version: number;
    virt_inuse: number;
    virt_inuse_map: number;
}