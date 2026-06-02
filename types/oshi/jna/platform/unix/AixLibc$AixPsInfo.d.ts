import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AixLibc$AixLwpsInfo } from '../../../../oshi/jna/platform/unix/AixLibc$AixLwpsInfo.d.ts'
import type { AixLibc$Timestruc } from '../../../../oshi/jna/platform/unix/AixLibc$Timestruc.d.ts'
export class AixLibc$AixPsInfo extends Object {
    constructor(arg0: ByteBuffer)
    pr__pad: number[];
    pr__pad1: number;
    pr__pad2: number;
    pr_addr: number;
    pr_argc: number;
    pr_argv: number;
    pr_cid: number;
    pr_egid: number;
    pr_envp: number;
    pr_euid: number;
    pr_flag: number;
    pr_flag2: number;
    pr_fname: number[];
    pr_gid: number;
    pr_lwp: AixLibc$AixLwpsInfo;
    pr_nlwp: number;
    pr_pgid: number;
    pr_pid: number;
    pr_ppid: number;
    pr_psargs: number[];
    pr_rssize: number;
    pr_sid: number;
    pr_size: number;
    pr_start: AixLibc$Timestruc;
    pr_time: AixLibc$Timestruc;
    pr_ttydev: number;
    pr_uid: number;
}