import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ByteProcessor } from '../../../io/netty/util/ByteProcessor.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { BitSet } from '../../../java/util/BitSet.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { GlobalPos } from '../../../net/minecraft/core/GlobalPos.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { NbtAccounter } from '../../../net/minecraft/nbt/NbtAccounter.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { StreamDecoder } from '../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamEncoder } from '../../../net/minecraft/network/codec/StreamEncoder.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChunkPos } from '../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockHitResult } from '../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Quaternionf } from '../../../org/joml/Quaternionf.d.ts'
import type { Quaternionfc } from '../../../org/joml/Quaternionfc.d.ts'
import type { Vector3f } from '../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../org/joml/Vector3fc.d.ts'
export class FriendlyByteBuf extends ByteBuf {
    static MAX_COMPONENT_STRING_LENGTH: number;
    static MAX_STRING_LENGTH: number;
    static limitValue(paramoriginal: (param0: number) => Object | null, paramlimit: number): (param0: number) => Object | null;
    static readBlockPos(paraminput: ByteBuf): BlockPos;
    static readByteArray(paraminput: ByteBuf): number[];
    static readByteArray(paraminput: ByteBuf, parammaxSize: number): number[];
    static readChunkPos(paraminput: ByteBuf): ChunkPos;
    static readContainerId(paraminput: ByteBuf): number;
    static readFixedSizeLongArray(paraminput: ByteBuf, paramoutput: number[]): number[];
    static readLongArray(paraminput: ByteBuf): number[];
    static readNbt(paraminput: ByteBuf): CompoundTag;
    static readNbt(paraminput: ByteBuf, paramaccounter: NbtAccounter): Tag;
    static readNullable(paraminput: ByteBuf | null, paramvalueDecoder: (param0: Object) => Object | null): Object | null;
    static readQuaternion(paraminput: ByteBuf): Quaternionf;
    static readUUID(paraminput: ByteBuf): UUID;
    static readVector3f(paraminput: ByteBuf): Vector3f;
    static writeBlockPos(paramoutput: ByteBuf, parampos: BlockPos): void;
    static writeByteArray(paramoutput: ByteBuf, parambytes: number[]): void;
    static writeChunkPos(paramoutput: ByteBuf, paramchunkPos: ChunkPos): void;
    static writeContainerId(paramoutput: ByteBuf, paramid: number): void;
    static writeFixedSizeLongArray(paramoutput: ByteBuf, paramlongs: number[]): void;
    static writeLongArray(paramoutput: ByteBuf, paramlongs: number[]): void;
    static writeNbt(paramoutput: ByteBuf, paramtag: Tag): void;
    static writeNullable(paramoutput: ByteBuf | null, paramvalue: Object | null, paramvalueEncoder: (param0: Object, param1: Object | null) => void): void;
    static writeQuaternion(paramoutput: ByteBuf, paramvalue: Quaternionfc): void;
    static writeUUID(paramoutput: ByteBuf, paramuuid: UUID): void;
    static writeVector3f(paramoutput: ByteBuf, paramv: Vector3fc): void;
    constructor(source: ByteBuf)
    // private source: ByteBuf;
    alloc(): ByteBufAllocator;
    array(): number[];
    arrayOffset(): number;
    asReadOnly(): ByteBuf;
    bytesBefore(value: number): number;
    bytesBefore(length: number, value: number): number;
    bytesBefore(index: number, length: number, value: number): number;
    capacity(): number;
    capacity(newCapacity: number): FriendlyByteBuf;
    clear(): FriendlyByteBuf;
    compareTo(buffer: ByteBuf): number;
    copy(): ByteBuf;
    copy(index: number, length: number): ByteBuf;
    discardReadBytes(): FriendlyByteBuf;
    discardSomeReadBytes(): FriendlyByteBuf;
    duplicate(): ByteBuf;
    ensureWritable(minWritableBytes: number): FriendlyByteBuf;
    ensureWritable(minWritableBytes: number, force: boolean): number;
    equals(obj: Object | null): boolean;
    forEachByte(processor: ByteProcessor): number;
    forEachByte(index: number, length: number, processor: ByteProcessor): number;
    forEachByteDesc(processor: ByteProcessor): number;
    forEachByteDesc(index: number, length: number, processor: ByteProcessor): number;
    getBoolean(index: number): boolean;
    getByte(index: number): number;
    getBytes(index: number, dst: ByteBuf): FriendlyByteBuf;
    getBytes(index: number, dst: ByteBuf, length: number): FriendlyByteBuf;
    getBytes(index: number, dst: ByteBuf, dstIndex: number, length: number): FriendlyByteBuf;
    getBytes(index: number, out: OutputStream, length: number): FriendlyByteBuf;
    getBytes(index: number, dst: ByteBuffer): FriendlyByteBuf;
    getBytes(index: number, out: FileChannel, position: number, length: number): number;
    getBytes(index: number, out: GatheringByteChannel, length: number): number;
    getBytes(index: number, dst: number[]): FriendlyByteBuf;
    getBytes(index: number, dst: number[], dstIndex: number, length: number): FriendlyByteBuf;
    getChar(index: number): string;
    getCharSequence(index: number, length: number, charset: Charset): CharSequence;
    getDouble(index: number): number;
    getFloat(index: number): number;
    getInt(index: number): number;
    getIntLE(index: number): number;
    getLong(index: number): number;
    getLongLE(index: number): number;
    getMedium(index: number): number;
    getMediumLE(index: number): number;
    getShort(index: number): number;
    getShortLE(index: number): number;
    getUnsignedByte(index: number): number;
    getUnsignedInt(index: number): number;
    getUnsignedIntLE(index: number): number;
    getUnsignedMedium(index: number): number;
    getUnsignedMediumLE(index: number): number;
    getUnsignedShort(index: number): number;
    getUnsignedShortLE(index: number): number;
    hasArray(): boolean;
    hasMemoryAddress(): boolean;
    hashCode(): number;
    indexOf(fromIndex: number, toIndex: number, value: number): number;
    internalNioBuffer(index: number, length: number): ByteBuffer;
    isContiguous(): boolean;
    isDirect(): boolean;
    isReadOnly(): boolean;
    isReadable(): boolean;
    isReadable(size: number): boolean;
    isWritable(): boolean;
    isWritable(size: number): boolean;
    markReaderIndex(): FriendlyByteBuf;
    markWriterIndex(): FriendlyByteBuf;
    maxCapacity(): number;
    maxFastWritableBytes(): number;
    maxWritableBytes(): number;
    memoryAddress(): number;
    nioBuffer(): ByteBuffer;
    nioBuffer(index: number, length: number): ByteBuffer;
    nioBufferCount(): number;
    nioBuffers(): ByteBuffer[];
    nioBuffers(index: number, length: number): ByteBuffer[];
    order(): ByteOrder;
    order(endianness: ByteOrder): ByteBuf;
    readBitSet(): BitSet;
    readBlockHitResult(): BlockHitResult;
    readBlockPos(): BlockPos;
    readBoolean(): boolean;
    readById<T extends Object | number | string | boolean>(converter: (param0: number) => T): T;
    readByte(): number;
    readByteArray(): number[];
    readByteArray(maxSize: number): number[];
    readBytes(dst: ByteBuf): FriendlyByteBuf;
    readBytes(dst: ByteBuf, length: number): FriendlyByteBuf;
    readBytes(dst: ByteBuf, dstIndex: number, length: number): FriendlyByteBuf;
    readBytes(out: OutputStream, length: number): FriendlyByteBuf;
    readBytes(dst: ByteBuffer): FriendlyByteBuf;
    readBytes(out: FileChannel, position: number, length: number): number;
    readBytes(out: GatheringByteChannel, length: number): number;
    readBytes(dst: number[]): FriendlyByteBuf;
    readBytes(dst: number[], dstIndex: number, length: number): FriendlyByteBuf;
    readBytes(length: number): ByteBuf;
    readChar(): string;
    readCharSequence(length: number, charset: Charset): CharSequence;
    readChunkPos(): ChunkPos;
    readCollection<C extends T[], T extends Object | number | string | boolean>(ctor: (param0: number) => C, elementDecoder: (param0: FriendlyByteBuf) => T): C;
    readContainerId(): number;
    readDouble(): number;
    readEither<L extends Object | number | string | boolean, R extends Object | number | string | boolean>(leftReader: (param0: FriendlyByteBuf) => L, rightReader: (param0: FriendlyByteBuf) => R): Either<L, R>;
    readEnum<T extends Enum<T>>(clazz: Class<T>): T;
    readEnumSet<E extends Enum<E>>(clazz: Class<E>): E[];
    readFixedBitSet(size: number): BitSet;
    readFixedSizeLongArray(output: number[]): number[];
    readFloat(): number;
    readGlobalPos(): GlobalPos;
    readIdentifier(): Identifier;
    readInstant(): Instant;
    readInt(): number;
    readIntIdList(): (Object | null)[];
    readIntLE(): number;
    readLenientJsonWithCodec<T extends Object | number | string | boolean>(codec: Codec<T>): T;
    readList<T extends Object | number | string | boolean>(elementDecoder: (param0: FriendlyByteBuf) => T): T[];
    readLong(): number;
    readLongArray(): number[];
    readLongLE(): number;
    readMap<M extends Map<K, V>, K extends Object | number | string | boolean, V extends Object | number | string | boolean>(ctor: (param0: number) => M, keyDecoder: (param0: FriendlyByteBuf) => K, valueDecoder: (param0: FriendlyByteBuf) => V): M;
    readMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(keyDecoder: (param0: FriendlyByteBuf) => K, valueDecoder: (param0: FriendlyByteBuf) => V): Map<K, V>;
    readMedium(): number;
    readMediumLE(): number;
    readNbt(): CompoundTag;
    readNbt(accounter: NbtAccounter): Tag;
    readNullable<T extends Object | number | string | boolean>(valueDecoder: (param0: FriendlyByteBuf) => T): T;
    readOptional<T extends Object | number | string | boolean>(valueReader: (param0: FriendlyByteBuf) => T): Optional<T>;
    readPublicKey(): PublicKey;
    readQuaternion(): Quaternionf;
    readRegistryKey<T extends Object | number | string | boolean>(): ResourceKey<T[]>;
    readResourceKey<T extends Object | number | string | boolean>(registry: ResourceKey<T[]>): ResourceKey<T>;
    readRetainedSlice(length: number): ByteBuf;
    readShort(): number;
    readShortLE(): number;
    readSlice(length: number): ByteBuf;
    readString(length: number, charset: Charset): string;
    readUUID(): UUID;
    readUnsignedByte(): number;
    readUnsignedInt(): number;
    readUnsignedIntLE(): number;
    readUnsignedMedium(): number;
    readUnsignedMediumLE(): number;
    readUnsignedShort(): number;
    readUnsignedShortLE(): number;
    readUtf(): string;
    readUtf(maxLength: number): string;
    readVarInt(): number;
    readVarIntArray(): number[];
    readVarIntArray(maxSize: number): number[];
    readVarLong(): number;
    readVector3f(): Vector3f;
    readWithCodec<T extends Object | number | string | boolean>(ops: DynamicOps<Tag>, codec: Codec<T>, accounter: NbtAccounter): T;
    readWithCodecTrusted<T extends Object | number | string | boolean>(ops: DynamicOps<Tag>, codec: Codec<T>): T;
    readWithCount(reader: (param0: FriendlyByteBuf) => void): void;
    readableBytes(): number;
    readerIndex(): number;
    readerIndex(readerIndex: number): FriendlyByteBuf;
    refCnt(): number;
    release(): boolean;
    release(decrement: number): boolean;
    resetReaderIndex(): FriendlyByteBuf;
    resetWriterIndex(): FriendlyByteBuf;
    retain(): FriendlyByteBuf;
    retain(increment: number): FriendlyByteBuf;
    retainedDuplicate(): ByteBuf;
    retainedSlice(): ByteBuf;
    retainedSlice(index: number, length: number): ByteBuf;
    setBoolean(index: number, value: boolean): FriendlyByteBuf;
    setByte(index: number, value: number): FriendlyByteBuf;
    setBytes(index: number, src: ByteBuf): FriendlyByteBuf;
    setBytes(index: number, src: ByteBuf, length: number): FriendlyByteBuf;
    setBytes(index: number, src: ByteBuf, srcIndex: number, length: number): FriendlyByteBuf;
    setBytes(index: number, in_: InputStream, length: number): number;
    setBytes(index: number, src: ByteBuffer): FriendlyByteBuf;
    setBytes(index: number, in_: FileChannel, position: number, length: number): number;
    setBytes(index: number, in_: ScatteringByteChannel, length: number): number;
    setBytes(index: number, src: number[]): FriendlyByteBuf;
    setBytes(index: number, src: number[], srcIndex: number, length: number): FriendlyByteBuf;
    setChar(index: number, value: number): FriendlyByteBuf;
    setCharSequence(index: number, sequence: CharSequence, charset: Charset): number;
    setDouble(index: number, value: number): FriendlyByteBuf;
    setFloat(index: number, value: number): FriendlyByteBuf;
    setIndex(readerIndex: number, writerIndex: number): FriendlyByteBuf;
    setInt(index: number, value: number): FriendlyByteBuf;
    setIntLE(index: number, value: number): FriendlyByteBuf;
    setLong(index: number, value: number): FriendlyByteBuf;
    setLongLE(index: number, value: number): FriendlyByteBuf;
    setMedium(index: number, value: number): FriendlyByteBuf;
    setMediumLE(index: number, value: number): FriendlyByteBuf;
    setShort(index: number, value: number): FriendlyByteBuf;
    setShortLE(index: number, value: number): FriendlyByteBuf;
    setZero(index: number, length: number): FriendlyByteBuf;
    skipBytes(length: number): FriendlyByteBuf;
    slice(): ByteBuf;
    slice(index: number, length: number): ByteBuf;
    toString(): string;
    toString(charset: Charset): string;
    toString(index: number, length: number, charset: Charset): string;
    touch(): FriendlyByteBuf;
    touch(hint: Object): FriendlyByteBuf;
    unwrap(): ByteBuf;
    writableBytes(): number;
    writeBitSet(bitSet: BitSet): void;
    writeBlockHitResult(blockHit: BlockHitResult): void;
    writeBlockPos(pos: BlockPos): FriendlyByteBuf;
    writeBoolean(value: boolean): FriendlyByteBuf;
    writeById<T extends Object | number | string | boolean>(converter: (param0: T) => number, value: T): FriendlyByteBuf;
    writeByte(value: number): FriendlyByteBuf;
    writeByteArray(bytes: number[]): FriendlyByteBuf;
    writeBytes(src: ByteBuf): FriendlyByteBuf;
    writeBytes(src: ByteBuf, length: number): FriendlyByteBuf;
    writeBytes(src: ByteBuf, srcIndex: number, length: number): FriendlyByteBuf;
    writeBytes(in_: InputStream, length: number): number;
    writeBytes(src: ByteBuffer): FriendlyByteBuf;
    writeBytes(in_: FileChannel, position: number, length: number): number;
    writeBytes(in_: ScatteringByteChannel, length: number): number;
    writeBytes(src: number[]): FriendlyByteBuf;
    writeBytes(src: number[], srcIndex: number, length: number): FriendlyByteBuf;
    writeChar(value: number): FriendlyByteBuf;
    writeCharSequence(sequence: CharSequence, charset: Charset): number;
    writeChunkPos(pos: ChunkPos): FriendlyByteBuf;
    writeCollection<T extends Object | number | string | boolean>(collection: T[], encoder: (param0: FriendlyByteBuf, param1: T) => void): void;
    writeContainerId(id: number): void;
    writeDouble(value: number): FriendlyByteBuf;
    writeEither<L extends Object | number | string | boolean, R extends Object | number | string | boolean>(value: Either<L, R>, leftWriter: (param0: FriendlyByteBuf, param1: L) => void, rightWriter: (param0: FriendlyByteBuf, param1: R) => void): void;
    writeEnum(value: Enum<Object>): FriendlyByteBuf;
    writeEnumSet<E extends Enum<E>>(set: E[], clazz: Class<E>): void;
    writeFixedBitSet(bitSet: BitSet, size: number): void;
    writeFixedSizeLongArray(longs: number[]): FriendlyByteBuf;
    writeFloat(value: number): FriendlyByteBuf;
    writeGlobalPos(globalPos: GlobalPos): void;
    writeIdentifier(identifier: Identifier): FriendlyByteBuf;
    writeInstant(value: Instant): void;
    writeInt(value: number): FriendlyByteBuf;
    writeIntIdList(ids: (Object | null)[]): void;
    writeIntLE(value: number): FriendlyByteBuf;
    writeJsonWithCodec<T extends Object | number | string | boolean>(codec: Codec<T>, value: T): void;
    writeLong(value: number): FriendlyByteBuf;
    writeLongArray(longs: number[]): FriendlyByteBuf;
    writeLongLE(value: number): FriendlyByteBuf;
    writeMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(map: Map<K, V>, keyEncoder: (param0: FriendlyByteBuf, param1: K) => void, valueEncoder: (param0: FriendlyByteBuf, param1: V) => void): void;
    writeMedium(value: number): FriendlyByteBuf;
    writeMediumLE(value: number): FriendlyByteBuf;
    writeNbt(tag: Tag): FriendlyByteBuf;
    writeNullable<T extends Object | number | string | boolean>(value: T, valueEncoder: (param0: FriendlyByteBuf, param1: T) => void): void;
    writeOptional<T extends Object | number | string | boolean>(value: Optional<T>, valueWriter: (param0: FriendlyByteBuf, param1: T) => void): void;
    writePublicKey(publicKey: PublicKey): FriendlyByteBuf;
    writeQuaternion(q: Quaternionf): void;
    writeResourceKey(key: ResourceKey<Object>): void;
    writeShort(value: number): FriendlyByteBuf;
    writeShortLE(value: number): FriendlyByteBuf;
    writeUUID(uuid: UUID): FriendlyByteBuf;
    writeUtf(value: string): FriendlyByteBuf;
    writeUtf(value: string, maxLength: number): FriendlyByteBuf;
    writeVarInt(value: number): FriendlyByteBuf;
    writeVarIntArray(ints: number[]): FriendlyByteBuf;
    writeVarLong(value: number): FriendlyByteBuf;
    writeVector3f(v: Vector3f): void;
    writeWithCodec<T extends Object | number | string | boolean>(ops: DynamicOps<Tag>, codec: Codec<T>, value: T): FriendlyByteBuf;
    writeZero(length: number): FriendlyByteBuf;
    writerIndex(): number;
    writerIndex(writerIndex: number): FriendlyByteBuf;
}