import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class BoundingBox extends Object {
    static CODEC: Codec<BoundingBox>;
    static STREAM_CODEC: StreamCodec<ByteBuf, BoundingBox>;
    static encapsulating(parama: BoundingBox, paramb: BoundingBox): BoundingBox;
    static encapsulatingBoxes(paramiterable: BoundingBox[]): Optional<BoundingBox>;
    static encapsulatingPositions(paramiterable: BlockPos[]): Optional<BoundingBox>;
    static fromCorners(parampos0: Vec3i, parampos1: Vec3i): BoundingBox;
    static infinite(): BoundingBox;
    static orientBox(paramfootX: number, paramfootY: number, paramfootZ: number, paramoffX: number, paramoffY: number, paramoffZ: number, paramwidth: number, paramheight: number, paramdepth: number, paramdirection: Direction): BoundingBox;
    constructor(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number)
    constructor(content: BlockPos)
    // private maxX: number;
    // private maxY: number;
    // private maxZ: number;
    // private minX: number;
    // private minY: number;
    // private minZ: number;
    encapsulate(pos: BlockPos): BoundingBox;
    encapsulate(other: BoundingBox): BoundingBox;
    equals(o: Object | null): boolean;
    forAllCorners(consumer: (param0: BlockPos) => void): void;
    getCenter(): BlockPos;
    getLength(): Vec3i;
    getXSpan(): number;
    getYSpan(): number;
    getZSpan(): number;
    hashCode(): number;
    inflatedBy(amountToAddAllDirections: number): BoundingBox;
    inflatedBy(inflateX: number, inflateY: number, inflateZ: number): BoundingBox;
    intersectingChunks(): Stream<ChunkPos>;
    intersects(minX: number, minZ: number, maxX: number, maxZ: number): boolean;
    intersects(other: BoundingBox): boolean;
    isInside(x: number, y: number, z: number): boolean;
    isInside(pos: Vec3i): boolean;
    maxX(): number;
    maxY(): number;
    maxZ(): number;
    minX(): number;
    minY(): number;
    minZ(): number;
    move(dx: number, dy: number, dz: number): BoundingBox;
    move(amount: Vec3i): BoundingBox;
    moved(dx: number, dy: number, dz: number): BoundingBox;
    toString(): string;
}