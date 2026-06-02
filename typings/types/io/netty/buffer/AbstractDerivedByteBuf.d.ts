import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractDerivedByteBuf extends AbstractByteBuf {
    constructor(arg0: number)
    internalNioBuffer(arg0: number, arg1: number): ByteBuffer;
    isAccessible(): boolean;
    isAccessible0(): boolean;
    isContiguous(): boolean;
    isReadOnly(): boolean;
    nioBuffer(arg0: number, arg1: number): ByteBuffer;
    refCnt(): number;
    refCnt0(): number;
    release(): boolean;
    release(arg0: number): boolean;
    release0(): boolean;
    release0(arg0: number): boolean;
    retain(): ByteBuf;
    retain(arg0: number): ByteBuf;
    retain0(): ByteBuf;
    retain0(arg0: number): ByteBuf;
    touch(): ByteBuf;
    touch(arg0: Object): ByteBuf;
    touch0(): ByteBuf;
    touch0(arg0: Object): ByteBuf;
}