import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BlockPos$TraversalNodeStatus } from '../../../net/minecraft/core/BlockPos$TraversalNodeStatus.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Position } from '../../../net/minecraft/core/Position.d.ts'
import type { Vec3i } from '../../../net/minecraft/core/Vec3i.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
import type { Rotation } from '../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BoundingBox } from '../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { AABB } from '../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockPos extends Vec3i {
    static CODEC: Codec<BlockPos>;
    static CODEC: Codec<Vec3i>;
    static MAX_HORIZONTAL_COORDINATE: number;
    static PACKED_HORIZONTAL_LENGTH: number;
    static PACKED_Y_LENGTH: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, BlockPos>;
    static STREAM_CODEC: StreamCodec<ByteBuf, Vec3i>;
    static ZERO: BlockPos;
    static ZERO: Vec3i;
    static asLong(paramx: number, paramy: number, paramz: number): number;
    static betweenClosed(paramminX: number, paramminY: number, paramminZ: number, parammaxX: number, parammaxY: number, parammaxZ: number): BlockPos[];
    static betweenClosed(parama: BlockPos, paramb: BlockPos): BlockPos[];
    static betweenClosed(parambox: AABB): BlockPos[];
    static betweenClosedStream(paramminX: number, paramminY: number, paramminZ: number, parammaxX: number, parammaxY: number, parammaxZ: number): Stream<BlockPos>;
    static betweenClosedStream(parama: BlockPos, paramb: BlockPos): Stream<BlockPos>;
    static betweenClosedStream(paramboundingBox: BoundingBox): Stream<BlockPos>;
    static betweenClosedStream(parambox: AABB): Stream<BlockPos>;
    static betweenCornersInDirection(paramfirstCornerX: number, paramfirstCornerY: number, paramfirstCornerZ: number, paramsecondCornerX: number, paramsecondCornerY: number, paramsecondCornerZ: number, paramdirection: Vec3): BlockPos[];
    static betweenCornersInDirection(paramfirstCorner: BlockPos, paramsecondCorner: BlockPos, paramdirection: Vec3): BlockPos[];
    static betweenCornersInDirection(paramaabb: AABB, paramdirection: Vec3): BlockPos[];
    static breadthFirstTraversal(paramstartPos: BlockPos, parammaxDepth: number, parammaxCount: number, paramneighbourProvider: (param0: BlockPos, param1: (param0: BlockPos) => void) => void, paramnodeProcessor: (param0: BlockPos) => BlockPos$TraversalNodeStatus): number;
    static containing(paramx: number, paramy: number, paramz: number): BlockPos;
    static containing(parampos: Position): BlockPos;
    static findClosestMatch(paramstartPos: BlockPos, paramhorizontalSearchRadius: number, paramverticalSearchRadius: number, parampredicate: (param0: BlockPos) => boolean): Optional<BlockPos>;
    static getFlatIndex(paramneighborBlockNode: number): number;
    static getX(paramblockNode: number): number;
    static getY(paramblockNode: number): number;
    static getZ(paramblockNode: number): number;
    static max(parama: BlockPos, paramb: BlockPos): BlockPos;
    static min(parama: BlockPos, paramb: BlockPos): BlockPos;
    static neighborColumn(paramstartX: number, paramstartY: number, paramstartZ: number, paramendY: number): BlockPos[];
    static of(paramblockNode: number): BlockPos;
    static offset(paramblockNode: number, paramstepX: number, paramstepY: number, paramstepZ: number): number;
    static offset(paramblockNode: number, paramoffset: Direction): number;
    static offsetCodec(parammaxOffsetPerAxis: number): Codec<Vec3i>;
    static randomBetweenClosed(paramrandom: RandomSource, paramlimit: number, paramminX: number, paramminY: number, paramminZ: number, parammaxX: number, parammaxY: number, parammaxZ: number): BlockPos[];
    static randomInCube(paramrandom: RandomSource, paramlimit: number, paramcenter: BlockPos, paramsizeToScanInAllDirections: number): BlockPos[];
    static spiralAround(paramcenter: BlockPos, paramradius: number, paramfirstDirection: Direction, paramsecondDirection: Direction): BlockPos$MutableBlockPos[];
    static squareOutSouthEast(paramfrom: BlockPos): Stream<BlockPos>;
    static withinManhattan(paramorigin: BlockPos, paramreachX: number, paramreachY: number, paramreachZ: number): BlockPos[];
    static withinManhattanStream(paramorigin: BlockPos, paramreachX: number, paramreachY: number, paramreachZ: number): Stream<BlockPos>;
    constructor(x: number, y: number, z: number)
    constructor(vec3i: Vec3i)
    above(): BlockPos;
    above(arg0: number): BlockPos;
    asLong(): number;
    atY(y: number): BlockPos;
    below(): BlockPos;
    below(arg0: number): BlockPos;
    clampLocationWithin(location: Vec3): Vec3;
    cross(upVector: Vec3i): BlockPos;
    east(): BlockPos;
    east(arg0: number): BlockPos;
    immutable(): BlockPos;
    multiply(scale: number): BlockPos;
    multiply(xScale: number, yScale: number, zScale: number): Vec3i;
    mutable(): BlockPos$MutableBlockPos;
    north(): BlockPos;
    north(arg0: number): BlockPos;
    offset(x: number, y: number, z: number): BlockPos;
    offset(vec: Vec3i): BlockPos;
    relative(direction: Direction): BlockPos;
    relative(direction: Direction, steps: number): BlockPos;
    relative(axis: Direction$Axis, steps: number): BlockPos;
    rotate(rotation: Rotation): BlockPos;
    south(): BlockPos;
    south(arg0: number): BlockPos;
    subtract(vec: Vec3i): BlockPos;
    west(): BlockPos;
    west(arg0: number): BlockPos;
}