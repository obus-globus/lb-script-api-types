import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export class Perfstat$perfstat_disk_t extends Structure {
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
    adapter: number[];
    bsize: number;
    description: number[];
    dk_type: number;
    free: number;
    max_rserv: number;
    max_wserv: number;
    min_rserv: number;
    min_wserv: number;
    name: number[];
    paths_count: number;
    q_full: number;
    q_sampled: number;
    qdepth: number;
    rblks: number;
    rfailed: number;
    rserv: number;
    rtimeout: number;
    size: number;
    time: number;
    version: number;
    vgname: number[];
    wblks: number;
    wfailed: number;
    wpar_id: number;
    wq_depth: number;
    wq_max_time: number;
    wq_min_time: number;
    wq_sampled: number;
    wq_time: number;
    wserv: number;
    wtimeout: number;
    xfers: number;
    xrate: number;
}