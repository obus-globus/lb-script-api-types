import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { AbstractUnsafeSwappedByteBuf } from '../../../io/netty/buffer/AbstractUnsafeSwappedByteBuf.d.ts'
export class UnsafeHeapSwappedByteBuf extends AbstractUnsafeSwappedByteBuf {
    constructor(arg0: AbstractByteBuf)
    _getInt(arg0: AbstractByteBuf, arg1: number): number;
    _getLong(arg0: AbstractByteBuf, arg1: number): number;
    _getShort(arg0: AbstractByteBuf, arg1: number): number;
    _setInt(arg0: AbstractByteBuf, arg1: number, arg2: number): void;
    _setLong(arg0: AbstractByteBuf, arg1: number, arg2: number): void;
    _setShort(arg0: AbstractByteBuf, arg1: number, arg2: number): void;
}