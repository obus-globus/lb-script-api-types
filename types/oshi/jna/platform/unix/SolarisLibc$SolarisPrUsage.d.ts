import type { NativeLong } from '../../../../com/sun/jna/NativeLong.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SolarisLibc$Timestruc } from '../../../../oshi/jna/platform/unix/SolarisLibc$Timestruc.d.ts'
export class SolarisLibc$SolarisPrUsage extends Object {
    constructor(arg0: ByteBuffer)
    filler: NativeLong[];
    filltime: SolarisLibc$Timestruc[];
    pr_count: number;
    pr_create: SolarisLibc$Timestruc;
    pr_dftime: SolarisLibc$Timestruc;
    pr_ictx: NativeLong;
    pr_inblk: NativeLong;
    pr_ioch: NativeLong;
    pr_kftime: SolarisLibc$Timestruc;
    pr_ltime: SolarisLibc$Timestruc;
    pr_lwpid: number;
    pr_majf: NativeLong;
    pr_minf: NativeLong;
    pr_mrcv: NativeLong;
    pr_msnd: NativeLong;
    pr_nswap: NativeLong;
    pr_oublk: NativeLong;
    pr_rtime: SolarisLibc$Timestruc;
    pr_sigs: NativeLong;
    pr_slptime: SolarisLibc$Timestruc;
    pr_stime: SolarisLibc$Timestruc;
    pr_stoptime: SolarisLibc$Timestruc;
    pr_sysc: NativeLong;
    pr_term: SolarisLibc$Timestruc;
    pr_tftime: SolarisLibc$Timestruc;
    pr_tstamp: SolarisLibc$Timestruc;
    pr_ttime: SolarisLibc$Timestruc;
    pr_utime: SolarisLibc$Timestruc;
    pr_vctx: NativeLong;
    pr_wtime: SolarisLibc$Timestruc;
}