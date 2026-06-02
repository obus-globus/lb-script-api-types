import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { ReadOnlyByteBuf } from '../../../io/netty/buffer/ReadOnlyByteBuf.d.ts'
export class ReadOnlyAbstractByteBuf extends ReadOnlyByteBuf {
    constructor(arg0: AbstractByteBuf)
    _getByte(arg0: number): number;
    _getInt(arg0: number): number;
    _getIntLE(arg0: number): number;
    _getLong(arg0: number): number;
    _getLongLE(arg0: number): number;
    _getShort(arg0: number): number;
    _getShortLE(arg0: number): number;
    _getUnsignedMedium(arg0: number): number;
    _getUnsignedMediumLE(arg0: number): number;
    unwrap(): AbstractByteBuf;
}