import type { NioIoEvent } from '../../../../io/netty/channel/nio/NioIoEvent.d.ts'
import type { NioIoOps } from '../../../../io/netty/channel/nio/NioIoOps.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NioIoOps$DefaultNioIoEvent extends Object implements NioIoEvent {
    constructor(arg0: NioIoOps)
    // private ops: NioIoOps;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    ops(): NioIoOps;
}