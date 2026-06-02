import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { PooledHeapByteBuf } from '../../../io/netty/buffer/PooledHeapByteBuf.d.ts'
import type { SwappedByteBuf } from '../../../io/netty/buffer/SwappedByteBuf.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
export class PooledUnsafeHeapByteBuf extends PooledHeapByteBuf {
    private constructor(arg0: ObjectPool$Handle<PooledUnsafeHeapByteBuf>, arg1: number)
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
    newSwappedByteBuf(): SwappedByteBuf;
    setZero(arg0: number, arg1: number): ByteBuf;
    writeZero(arg0: number): ByteBuf;
}