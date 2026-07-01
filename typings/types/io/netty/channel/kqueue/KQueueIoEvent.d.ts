import type { IoEvent } from '../../../../io/netty/channel/IoEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueIoEvent extends Object implements IoEvent {
    static newEvent(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): KQueueIoEvent;
    static newEvent(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): KQueueIoEvent;
    constructor()
    // private data: number;
    // private fflags: number;
    // private filter: number;
    // private flags: number;
    // private ident: number;
    // private udata: number;
    data(): number;
    fflags(): number;
    filter(): number;
    flags(): number;
    ident(): number;
    toString(): string;
    udata(): number;
    update(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
}