import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AixLibc$AixLwpsInfo extends Object {
    constructor(arg0: ByteBuffer)
    pr_addr: number;
    pr_bindpro: number;
    pr_clname: number[];
    pr_flag: number;
    pr_lwpid: number;
    pr_nice: number;
    pr_onpro: number;
    pr_policy: number;
    pr_pri: number;
    pr_sname: number;
    pr_state: number;
    pr_wchan: number;
    pr_wtype: number;
}