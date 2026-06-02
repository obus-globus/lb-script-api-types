import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { LongConsumer } from '../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { Position } from '../../../net/minecraft/core/Position.d.ts'
import type { Vec3i } from '../../../net/minecraft/core/Vec3i.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ChunkPos } from '../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkAccess } from '../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { EntityAccess } from '../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
export class SectionPos extends Vec3i {
    static CODEC: Codec<Vec3i>;
    static SECTION_BITS: number;
    static SECTION_HALF_SIZE: number;
    static SECTION_MASK: number;
    static SECTION_MAX_INDEX: number;
    static SECTION_SIZE: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, SectionPos>;
    static STREAM_CODEC: StreamCodec<ByteBuf, Vec3i>;
    static ZERO: Vec3i;
    static aroundAndAtBlockPos(paramblockX: number, paramblockY: number, paramblockZ: number, paramsectionConsumer: (param0: number) => void): void;
    static aroundAndAtBlockPos(paramblockPos: number, paramsectionConsumer: (param0: number) => void): void;
    static aroundAndAtBlockPos(paramblockPos: BlockPos, paramsectionConsumer: (param0: number) => void): void;
    static aroundChunk(paramcenter: ChunkPos, paramradius: number, paramminSection: number, parammaxSection: number): Stream<SectionPos>;
    static asLong(paramx: number, paramy: number, paramz: number): number;
    static asLong(parampos: BlockPos): number;
    static betweenClosedStream(paramminX: number, paramminY: number, paramminZ: number, parammaxX: number, parammaxY: number, parammaxZ: number): Stream<SectionPos>;
    static blockToSection(paramblockNode: number): number;
    static blockToSectionCoord(paramcoord: number): number;
    static blockToSectionCoord(paramblockCoord: number): number;
    static bottomOf(paramchunk: ChunkAccess): SectionPos;
    static cube(paramcenter: SectionPos, paramradius: number): Stream<SectionPos>;
    static getZeroNode(paramx: number, paramz: number): number;
    static getZeroNode(paramsectionNode: number): number;
    static of(paramx: number, paramy: number, paramz: number): SectionPos;
    static of(paramsectionNode: number): SectionPos;
    static of(parampos: BlockPos): SectionPos;
    static of(parampos: Position): SectionPos;
    static of(parampos: ChunkPos, paramsectionY: number): SectionPos;
    static of(paramentity: EntityAccess): SectionPos;
    static offset(paramsectionNode: number, paramstepX: number, paramstepY: number, paramstepZ: number): number;
    static offset(paramsectionNode: number, paramoffset: Direction): number;
    static offsetCodec(parammaxOffsetPerAxis: number): Codec<Vec3i>;
    static posToSectionCoord(parampos: number): number;
    static sectionRelative(paramblockCoord: number): number;
    static sectionRelativePos(parampos: BlockPos): number;
    static sectionRelativeX(paramrelative: number): number;
    static sectionRelativeY(paramrelative: number): number;
    static sectionRelativeZ(paramrelative: number): number;
    static sectionToBlockCoord(paramsectionCoord: number): number;
    static sectionToBlockCoord(paramsectionCoord: number, paramoffset: number): number;
    static sectionToChunk(paramsectionNode: number): number;
    static x(paramsectionNode: number): number;
    static y(paramsectionNode: number): number;
    static z(paramsectionNode: number): number;
    private constructor(x: number, y: number, z: number)
    asLong(): number;
    blocksInside(): Stream<BlockPos>;
    center(): BlockPos;
    chunk(): ChunkPos;
    maxBlockX(): number;
    maxBlockY(): number;
    maxBlockZ(): number;
    minBlockX(): number;
    minBlockY(): number;
    minBlockZ(): number;
    offset(x: number, y: number, z: number): SectionPos;
    origin(): BlockPos;
    relativeToBlockPos(relative: number): BlockPos;
    relativeToBlockX(relative: number): number;
    relativeToBlockY(relative: number): number;
    relativeToBlockZ(relative: number): number;
    x(): number;
    y(): number;
    z(): number;
}