import type { NativeLong } from '../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { LibCAPI$size_t } from '../../../../com/sun/jna/platform/unix/LibCAPI$size_t.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SolarisLibc$SolarisLwpsInfo } from '../../../../oshi/jna/platform/unix/SolarisLibc$SolarisLwpsInfo.d.ts'
import type { SolarisLibc$Timestruc } from '../../../../oshi/jna/platform/unix/SolarisLibc$Timestruc.d.ts'
export class SolarisLibc$SolarisPsInfo extends Object {
    constructor(arg0: ByteBuffer)
    pr_addr: Pointer;
    pr_argc: number;
    pr_argv: Pointer;
    pr_contract: number;
    pr_ctime: SolarisLibc$Timestruc;
    pr_dmodel: number;
    pr_egid: number;
    pr_envp: Pointer;
    pr_euid: number;
    pr_filler: number;
    pr_flag: number;
    pr_fname: number[];
    pr_gid: number;
    pr_lwp: SolarisLibc$SolarisLwpsInfo;
    pr_nlwp: number;
    pr_nzomb: number;
    pr_pad2: number[];
    pr_pctcpu: number;
    pr_pctmem: number;
    pr_pgid: number;
    pr_pid: number;
    pr_poolid: number;
    pr_ppid: number;
    pr_projid: number;
    pr_psargs: number[];
    pr_rssize: LibCAPI$size_t;
    pr_rssizepriv: LibCAPI$size_t;
    pr_sid: number;
    pr_size: LibCAPI$size_t;
    pr_start: SolarisLibc$Timestruc;
    pr_taskid: number;
    pr_time: SolarisLibc$Timestruc;
    pr_ttydev: NativeLong;
    pr_uid: number;
    pr_wstat: number;
    pr_zoneid: number;
}