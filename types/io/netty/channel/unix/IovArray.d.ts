import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelOutboundBuffer$MessageProcessor } from '../../../../io/netty/channel/ChannelOutboundBuffer$MessageProcessor.d.ts'
import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IovArray extends Object implements ChannelOutboundBuffer$MessageProcessor {
    static IOV_SIZE: number;
    constructor()
    constructor(arg0: ByteBuf)
    constructor(arg0: number)
    // private cleanable: CleanableDirectBuffer;
    // private count: number;
    // private maxBytes: number;
    // private maxCount: number;
    // private memory: ByteBuf;
    // private memoryAddress: number;
    // private size: number;
    add(arg0: ByteBuf): boolean;
    add(arg0: ByteBuf, arg1: number, arg2: number): boolean;
    // private add(arg0: number, arg1: number, arg2: number): boolean;
    clear(): void;
    count(): number;
    isFull(): boolean;
    maxBytes(): number;
    maxBytes(arg0: number): void;
    maxCount(): number;
    maxCount(arg0: number): void;
    memoryAddress(arg0: number): number;
    processMessage(arg0: Object): boolean;
    release(): void;
    size(): number;
}