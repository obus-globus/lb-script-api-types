import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Orientation$SideBias } from '../../../../../net/minecraft/world/level/redstone/Orientation$SideBias.d.ts'
export class Orientation extends Object {
    static STREAM_CODEC: StreamCodec<ByteBuf, Orientation>;
    static fromIndex(paramindex: number): Orientation;
    static of(paramup: Direction, paramfront: Direction, paramsideBias: Orientation$SideBias): Orientation;
    static random(paramrand: RandomSource): Orientation;
    private constructor(up: Direction, front: Direction, sideBias: Orientation$SideBias)
    readonly front: Direction;
    // private horizontalNeighbors: Direction[];
    readonly index: number;
    // private neighbors: Direction[];
    readonly side: Direction;
    readonly sideBias: Orientation$SideBias;
    readonly up: Direction;
    // private verticalNeighbors: Direction[];
    // private withFront: { [key in Direction]: Orientation };
    // private withSideBias: { [key in Orientation$SideBias]: Orientation };
    // private withUp: { [key in Direction]: Orientation };
    getDirections(): Direction[];
    getFront(): Direction;
    getHorizontalDirections(): Direction[];
    getIndex(): number;
    getSide(): Direction;
    getSideBias(): Orientation$SideBias;
    getUp(): Direction;
    getVerticalDirections(): Direction[];
    toString(): string;
    withFront(front: Direction): Orientation;
    withFrontAdjustSideBias(front: Direction): Orientation;
    withFrontPreserveUp(front: Direction): Orientation;
    withMirror(): Orientation;
    withSideBias(sideBias: Orientation$SideBias): Orientation;
    withUp(up: Direction): Orientation;
}