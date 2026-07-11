import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Perfstat$perfstat_memory_total_t extends Structure {
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
    bytes_coalesced: number;
    bytes_coalesced_mempool: number;
    comprsd_total: number;
    comprsd_wseg_pgs: number;
    comprsd_wseg_size: number;
    cpgins: number;
    cpgouts: number;
    cpool_inuse: number;
    cpool_size: number;
    cycles: number;
    expanded_memory: number;
    iohwm: number;
    iome: number;
    iomu: number;
    max_cpool_size: number;
    min_ucpool_size: number;
    numperm: number;
    pgbad: number;
    pgexct: number;
    pgins: number;
    pgouts: number;
    pgsp_free: number;
    pgsp_rsvd: number;
    pgsp_total: number;
    pgspins: number;
    pgspouts: number;
    pgsteals: number;
    pmem: number;
    real_avail: number;
    real_free: number;
    real_inuse: number;
    real_pinned: number;
    real_process: number;
    real_system: number;
    real_total: number;
    real_user: number;
    scans: number;
    target_cpool_size: number;
    true_size: number;
    ucpool_inuse: number;
    ucpool_size: number;
    version: number;
    virt_active: number;
    virt_total: number;
}