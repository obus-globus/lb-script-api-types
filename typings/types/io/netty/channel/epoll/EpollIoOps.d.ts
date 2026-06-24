import type { IoOps } from '../../../../io/netty/channel/IoOps.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollIoOps extends Object implements IoOps {
    static EPOLLERR: EpollIoOps;
    static EPOLLET: EpollIoOps;
    static EPOLLIN: EpollIoOps;
    static EPOLLOUT: EpollIoOps;
    static EPOLLRDHUP: EpollIoOps;
    static NONE: EpollIoOps;
    static valueOf(paramarg0: number): EpollIoOps;
    private constructor(arg0: number)
    // private value: number;
    contains(arg0: EpollIoOps): boolean;
    contains(arg0: number): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): number;
    with(arg0: EpollIoOps): EpollIoOps;
    without(arg0: EpollIoOps): EpollIoOps;
}