import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ChunkPos extends Record {
    static CODEC: Codec<ChunkPos>;
    static INVALID_CHUNK_POS: number;
    static MAX_COORDINATE_VALUE: number;
    static REGION_MAX_INDEX: number;
    static REGION_SIZE: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, ChunkPos>;
    static ZERO: ChunkPos;
    static containing(parampos: BlockPos): ChunkPos;
    static getRegionX(parampos: number): number;
    static getRegionZ(parampos: number): number;
    static getX(parampos: number): number;
    static getZ(parampos: number): number;
    static hash(paramx: number, paramz: number): number;
    static isValid(paramx: number, paramz: number): boolean;
    static maxFromRegion(paramregionX: number, paramregionZ: number): ChunkPos;
    static minFromRegion(paramregionX: number, paramregionZ: number): ChunkPos;
    static pack(paramx: number, paramz: number): number;
    static pack(parampos: BlockPos): number;
    static rangeClosed(paramcenter: ChunkPos, paramradius: number): Stream<ChunkPos>;
    static rangeClosed(paramfrom: ChunkPos, paramto: ChunkPos): Stream<ChunkPos>;
    static unpack(paramkey: number): ChunkPos;
    // private x: number;
    // private z: number;
    contains(pos: BlockPos): boolean;
    // private distanceSquared(x: number, z: number): number;
    distanceSquared(pos: number): number;
    distanceSquared(pos: ChunkPos): number;
    equals(o: Object | null): boolean;
    getBlockAt(x: number, y: number, z: number): BlockPos;
    getBlockX(offset: number): number;
    getBlockZ(offset: number): number;
    getChessboardDistance(x: number, z: number): number;
    getChessboardDistance(pos: ChunkPos): number;
    getMaxBlockX(): number;
    getMaxBlockZ(): number;
    getMiddleBlockPosition(y: number): BlockPos;
    getMiddleBlockX(): number;
    getMiddleBlockZ(): number;
    getMinBlockX(): number;
    getMinBlockZ(): number;
    getRegionLocalX(): number;
    getRegionLocalZ(): number;
    getRegionX(): number;
    getRegionZ(): number;
    getWorldPosition(): BlockPos;
    hashCode(): number;
    isValid(): boolean;
    pack(): number;
    toString(): string;
    x(): number;
    z(): number;
}