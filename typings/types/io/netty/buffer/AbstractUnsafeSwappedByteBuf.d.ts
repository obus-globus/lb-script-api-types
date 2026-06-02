import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { SwappedByteBuf } from '../../../io/netty/buffer/SwappedByteBuf.d.ts'
export abstract class AbstractUnsafeSwappedByteBuf extends SwappedByteBuf {
    constructor(arg0: AbstractByteBuf)
    // private nativeByteOrder: boolean;
    // private wrapped: AbstractByteBuf;
    _getInt(arg0: AbstractByteBuf, arg1: number): number;
    _getLong(arg0: AbstractByteBuf, arg1: number): number;
    _getShort(arg0: AbstractByteBuf, arg1: number): number;
    _setInt(arg0: AbstractByteBuf, arg1: number, arg2: number): void;
    _setLong(arg0: AbstractByteBuf, arg1: number, arg2: number): void;
    _setShort(arg0: AbstractByteBuf, arg1: number, arg2: number): void;
    getChar(arg0: number): string;
    getDouble(arg0: number): number;
    getFloat(arg0: number): number;
    getInt(arg0: number): number;
    getLong(arg0: number): number;
    getShort(arg0: number): number;
    getUnsignedInt(arg0: number): number;
    getUnsignedShort(arg0: number): number;
    setChar(arg0: number, arg1: number): ByteBuf;
    setDouble(arg0: number, arg1: number): ByteBuf;
    setFloat(arg0: number, arg1: number): ByteBuf;
    setInt(arg0: number, arg1: number): ByteBuf;
    setLong(arg0: number, arg1: number): ByteBuf;
    setShort(arg0: number, arg1: number): ByteBuf;
    writeChar(arg0: number): ByteBuf;
    writeDouble(arg0: number): ByteBuf;
    writeFloat(arg0: number): ByteBuf;
    writeInt(arg0: number): ByteBuf;
    writeLong(arg0: number): ByteBuf;
    writeShort(arg0: number): ByteBuf;
}