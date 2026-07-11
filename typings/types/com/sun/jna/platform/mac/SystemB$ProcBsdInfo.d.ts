import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SystemB$ProcBsdInfo extends Structure {
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
    e_tdev: number;
    e_tpgid: number;
    pbi_comm: number[];
    pbi_flags: number;
    pbi_gid: number;
    pbi_name: number[];
    pbi_nfiles: number;
    pbi_nice: number;
    pbi_pgid: number;
    pbi_pid: number;
    pbi_pjobc: number;
    pbi_ppid: number;
    pbi_rgid: number;
    pbi_ruid: number;
    pbi_start_tvsec: number;
    pbi_start_tvusec: number;
    pbi_status: number;
    pbi_svgid: number;
    pbi_svuid: number;
    pbi_uid: number;
    pbi_xstatus: number;
    rfu_1: number;
}