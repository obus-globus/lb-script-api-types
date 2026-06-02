import type { IoOps } from '../../../../io/netty/channel/IoOps.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueIoOps extends Object implements IoOps {
    static newOps(paramarg0: number, paramarg1: number, paramarg2: number): KQueueIoOps;
    private constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private data: number;
    // private fflags: number;
    // private filter: number;
    // private flags: number;
    data(): number;
    fflags(): number;
    filter(): number;
    flags(): number;
    toString(): string;
}