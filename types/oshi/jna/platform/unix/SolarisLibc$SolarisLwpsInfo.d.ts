import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SolarisLibc$Timestruc } from '../../../../oshi/jna/platform/unix/SolarisLibc$Timestruc.d.ts'
export class SolarisLibc$SolarisLwpsInfo extends Object {
    constructor(arg0: ByteBuffer)
    pr_addr: Pointer;
    pr_bindpro: number;
    pr_bindpset: number;
    pr_clname: number[];
    pr_cpu: number;
    pr_flag: number;
    pr_last_onproc: number;
    pr_lgrp: number;
    pr_lwpid: number;
    pr_name: number[];
    pr_nice: number;
    pr_oldname: number[];
    pr_oldpri: number;
    pr_onpro: number;
    pr_pad: number;
    pr_pctcpu: number;
    pr_pri: number;
    pr_sname: number;
    pr_start: SolarisLibc$Timestruc;
    pr_state: number;
    pr_stype: number;
    pr_syscall: number;
    pr_time: SolarisLibc$Timestruc;
    pr_wchan: Pointer;
}