import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { SwappedByteBuf } from '../../../io/netty/buffer/SwappedByteBuf.d.ts'
import type { UnpooledHeapByteBuf } from '../../../io/netty/buffer/UnpooledHeapByteBuf.d.ts'
export class UnpooledUnsafeHeapByteBuf extends UnpooledHeapByteBuf {
    constructor(arg0: ByteBufAllocator, arg1: number, arg2: number)
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
    allocateArray(arg0: number): number[];
    getByte(arg0: number): number;
    getInt(arg0: number): number;
    getIntLE(arg0: number): number;
    getLong(arg0: number): number;
    getLongLE(arg0: number): number;
    getShort(arg0: number): number;
    getShortLE(arg0: number): number;
    getUnsignedMedium(arg0: number): number;
    getUnsignedMediumLE(arg0: number): number;
    newSwappedByteBuf(): SwappedByteBuf;
    setByte(arg0: number, arg1: number): ByteBuf;
    setInt(arg0: number, arg1: number): ByteBuf;
    setIntLE(arg0: number, arg1: number): ByteBuf;
    setLong(arg0: number, arg1: number): ByteBuf;
    setLongLE(arg0: number, arg1: number): ByteBuf;
    setMedium(arg0: number, arg1: number): ByteBuf;
    setMediumLE(arg0: number, arg1: number): ByteBuf;
    setShort(arg0: number, arg1: number): ByteBuf;
    setShortLE(arg0: number, arg1: number): ByteBuf;
    setZero(arg0: number, arg1: number): ByteBuf;
    writeZero(arg0: number): ByteBuf;
}