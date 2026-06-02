import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CompositeByteBuf$Component extends Object {
    constructor(arg0: ByteBuf, arg1: number, arg2: ByteBuf, arg3: number, arg4: number, arg5: number, arg6: ByteBuf)
    // private adjustment: number;
    // private buf: ByteBuf;
    // private endOffset: number;
    // private offset: number;
    // private slice: ByteBuf;
    // private srcAdjustment: number;
    // private srcBuf: ByteBuf;
    duplicate(): ByteBuf;
    free(): void;
    idx(arg0: number): number;
    internalNioBuffer(arg0: number, arg1: number): ByteBuffer;
    length(): number;
    reposition(arg0: number): void;
    slice(): ByteBuf;
    srcIdx(arg0: number): number;
    transferTo(arg0: ByteBuf): void;
}