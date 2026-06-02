import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { DuplicatedByteBuf } from '../../../io/netty/buffer/DuplicatedByteBuf.d.ts'
export class UnpooledDuplicatedByteBuf extends DuplicatedByteBuf {
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
    _setByte(arg0: number, arg1: number): void;
    _setInt(arg0: number, arg1: number): void;
    _setIntLE(arg0: number, arg1: number): void;
    _setLong(arg0: number, arg1: number): void;
    _setLongLE(arg0: number, arg1: number): void;
    _setMedium(arg0: number, arg1: number): void;
    _setMediumLE(arg0: number, arg1: number): void;
    _setShort(arg0: number, arg1: number): void;
    _setShortLE(arg0: number, arg1: number): void;
    unwrap(): AbstractByteBuf;
}