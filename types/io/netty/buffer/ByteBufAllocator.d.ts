import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ByteBufAllocator extends Object{
    buffer(): ByteBuf;
    buffer(arg0: number): ByteBuf;
    buffer(arg0: number, arg1: number): ByteBuf;
    calculateNewCapacity(arg0: number, arg1: number): number;
    compositeBuffer(): ByteBuf[];
    compositeBuffer(arg0: number): ByteBuf[];
    compositeDirectBuffer(): ByteBuf[];
    compositeDirectBuffer(arg0: number): ByteBuf[];
    compositeHeapBuffer(): ByteBuf[];
    compositeHeapBuffer(arg0: number): ByteBuf[];
    directBuffer(): ByteBuf;
    directBuffer(arg0: number): ByteBuf;
    directBuffer(arg0: number, arg1: number): ByteBuf;
    heapBuffer(): ByteBuf;
    heapBuffer(arg0: number): ByteBuf;
    heapBuffer(arg0: number, arg1: number): ByteBuf;
    ioBuffer(): ByteBuf;
    ioBuffer(arg0: number): ByteBuf;
    ioBuffer(arg0: number, arg1: number): ByteBuf;
    isDirectBufferPooled(): boolean;
}