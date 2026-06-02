import type { EpollIoEvent } from '../../../../io/netty/channel/epoll/EpollIoEvent.d.ts'
import type { EpollIoOps } from '../../../../io/netty/channel/epoll/EpollIoOps.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollIoOps$DefaultEpollIoEvent extends Object implements EpollIoEvent {
    constructor(arg0: EpollIoOps)
    // private ops: EpollIoOps;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    ops(): EpollIoOps;
    toString(): string;
}