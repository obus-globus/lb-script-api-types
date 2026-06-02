import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { SimpleLeakAwareByteBuf } from '../../../io/netty/buffer/SimpleLeakAwareByteBuf.d.ts'
import type { ByteProcessor } from '../../../io/netty/util/ByteProcessor.d.ts'
import type { ResourceLeakTracker } from '../../../io/netty/util/ResourceLeakTracker.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class AdvancedLeakAwareByteBuf extends SimpleLeakAwareByteBuf {
    constructor(arg0: ByteBuf, arg1: ByteBuf, arg2: ResourceLeakTracker<ByteBuf>)
    constructor(arg0: ByteBuf, arg1: ResourceLeakTracker<ByteBuf>)
    asReadOnly(): ByteBuf;
    bytesBefore(arg0: number): number;
    bytesBefore(arg0: number, arg1: number): number;
    bytesBefore(arg0: number, arg1: number, arg2: number): number;
    capacity(arg0: number): ByteBuf;
    copy(): ByteBuf;
    copy(arg0: number, arg1: number): ByteBuf;
    discardReadBytes(): ByteBuf;
    discardSomeReadBytes(): ByteBuf;
    duplicate(): ByteBuf;
    ensureWritable(arg0: number): ByteBuf;
    ensureWritable(arg0: number, arg1: boolean): number;
    forEachByte(arg0: ByteProcessor): number;
    forEachByte(arg0: number, arg1: number, arg2: ByteProcessor): number;
    forEachByteDesc(arg0: ByteProcessor): number;
    forEachByteDesc(arg0: number, arg1: number, arg2: ByteProcessor): number;
    getBoolean(arg0: number): boolean;
    getByte(arg0: number): number;
    getBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    getBytes(arg0: number, arg1: OutputStream, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    getBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    getBytes(arg0: number, arg1: GatheringByteChannel, arg2: number): number;
    getBytes(arg0: number, arg1: number[]): ByteBuf;
    getBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
    getChar(arg0: number): string;
    getCharSequence(arg0: number, arg1: number, arg2: Charset): CharSequence;
    getDouble(arg0: number): number;
    getFloat(arg0: number): number;
    getInt(arg0: number): number;
    getIntLE(arg0: number): number;
    getLong(arg0: number): number;
    getLongLE(arg0: number): number;
    getMedium(arg0: number): number;
    getMediumLE(arg0: number): number;
    getShort(arg0: number): number;
    getShortLE(arg0: number): number;
    getUnsignedByte(arg0: number): number;
    getUnsignedInt(arg0: number): number;
    getUnsignedIntLE(arg0: number): number;
    getUnsignedMedium(arg0: number): number;
    getUnsignedMediumLE(arg0: number): number;
    getUnsignedShort(arg0: number): number;
    getUnsignedShortLE(arg0: number): number;
    indexOf(arg0: number, arg1: number, arg2: number): number;
    internalNioBuffer(arg0: number, arg1: number): ByteBuffer;
    newLeakAwareByteBuf(arg0: ByteBuf, arg1: ByteBuf, arg2: ResourceLeakTracker<ByteBuf>): AdvancedLeakAwareByteBuf;
    nioBuffer(): ByteBuffer;
    nioBuffer(arg0: number, arg1: number): ByteBuffer;
    nioBufferCount(): number;
    nioBuffers(): ByteBuffer[];
    nioBuffers(arg0: number, arg1: number): ByteBuffer[];
    order(arg0: ByteOrder): ByteBuf;
    readBoolean(): boolean;
    readByte(): number;
    readBytes(arg0: ByteBuf): ByteBuf;
    readBytes(arg0: ByteBuf, arg1: number): ByteBuf;
    readBytes(arg0: ByteBuf, arg1: number, arg2: number): ByteBuf;
    readBytes(arg0: OutputStream, arg1: number): ByteBuf;
    readBytes(arg0: ByteBuffer): ByteBuf;
    readBytes(arg0: FileChannel, arg1: number, arg2: number): number;
    readBytes(arg0: GatheringByteChannel, arg1: number): number;
    readBytes(arg0: number[]): ByteBuf;
    readBytes(arg0: number[], arg1: number, arg2: number): ByteBuf;
    readBytes(arg0: number): ByteBuf;
    readChar(): string;
    readCharSequence(arg0: number, arg1: Charset): CharSequence;
    readDouble(): number;
    readFloat(): number;
    readInt(): number;
    readIntLE(): number;
    readLong(): number;
    readLongLE(): number;
    readMedium(): number;
    readMediumLE(): number;
    readRetainedSlice(arg0: number): ByteBuf;
    readShort(): number;
    readShortLE(): number;
    readSlice(arg0: number): ByteBuf;
    readString(arg0: number, arg1: Charset): string;
    readUnsignedByte(): number;
    readUnsignedInt(): number;
    readUnsignedIntLE(): number;
    readUnsignedMedium(): number;
    readUnsignedMediumLE(): number;
    readUnsignedShort(): number;
    readUnsignedShortLE(): number;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): ByteBuf;
    retain(arg0: number): ByteBuf;
    retainedDuplicate(): ByteBuf;
    retainedSlice(): ByteBuf;
    retainedSlice(arg0: number, arg1: number): ByteBuf;
    setBoolean(arg0: number, arg1: boolean): ByteBuf;
    setByte(arg0: number, arg1: number): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    setBytes(arg0: number, arg1: InputStream, arg2: number): number;
    setBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    setBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    setBytes(arg0: number, arg1: ScatteringByteChannel, arg2: number): number;
    setBytes(arg0: number, arg1: number[]): ByteBuf;
    setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
    setChar(arg0: number, arg1: number): ByteBuf;
    setCharSequence(arg0: number, arg1: CharSequence, arg2: Charset): number;
    setDouble(arg0: number, arg1: number): ByteBuf;
    setFloat(arg0: number, arg1: number): ByteBuf;
    setInt(arg0: number, arg1: number): ByteBuf;
    setIntLE(arg0: number, arg1: number): ByteBuf;
    setLong(arg0: number, arg1: number): ByteBuf;
    setLongLE(arg0: number, arg1: number): ByteBuf;
    setMedium(arg0: number, arg1: number): ByteBuf;
    setMediumLE(arg0: number, arg1: number): ByteBuf;
    setShort(arg0: number, arg1: number): ByteBuf;
    setShortLE(arg0: number, arg1: number): ByteBuf;
    setZero(arg0: number, arg1: number): ByteBuf;
    skipBytes(arg0: number): ByteBuf;
    slice(): ByteBuf;
    slice(arg0: number, arg1: number): ByteBuf;
    toString(arg0: Charset): string;
    toString(arg0: number, arg1: number, arg2: Charset): string;
    touch(): ByteBuf;
    touch(arg0: Object): ByteBuf;
    writeBoolean(arg0: boolean): ByteBuf;
    writeByte(arg0: number): ByteBuf;
    writeBytes(arg0: ByteBuf): ByteBuf;
    writeBytes(arg0: ByteBuf, arg1: number): ByteBuf;
    writeBytes(arg0: ByteBuf, arg1: number, arg2: number): ByteBuf;
    writeBytes(arg0: InputStream, arg1: number): number;
    writeBytes(arg0: ByteBuffer): ByteBuf;
    writeBytes(arg0: FileChannel, arg1: number, arg2: number): number;
    writeBytes(arg0: ScatteringByteChannel, arg1: number): number;
    writeBytes(arg0: number[]): ByteBuf;
    writeBytes(arg0: number[], arg1: number, arg2: number): ByteBuf;
    writeChar(arg0: number): ByteBuf;
    writeCharSequence(arg0: CharSequence, arg1: Charset): number;
    writeDouble(arg0: number): ByteBuf;
    writeFloat(arg0: number): ByteBuf;
    writeInt(arg0: number): ByteBuf;
    writeIntLE(arg0: number): ByteBuf;
    writeLong(arg0: number): ByteBuf;
    writeLongLE(arg0: number): ByteBuf;
    writeMedium(arg0: number): ByteBuf;
    writeMediumLE(arg0: number): ByteBuf;
    writeShort(arg0: number): ByteBuf;
    writeShortLE(arg0: number): ByteBuf;
    writeZero(arg0: number): ByteBuf;
}