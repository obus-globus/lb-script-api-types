import type { OctahedralGroup } from '../../../../../com/mojang/math/OctahedralGroup.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Rotation extends Enum<Rotation> implements StringRepresentable {
    static BY_ID: (param0: number) => Rotation;
    static CLOCKWISE_180: Rotation;
    static CLOCKWISE_90: Rotation;
    static CODEC: Codec<Rotation>;
    static COUNTERCLOCKWISE_90: Rotation;
    static LEGACY_CODEC: Codec<Rotation>;
    static NONE: Rotation;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, Rotation>;
    static getRandom(paramrandom: RandomSource): Rotation;
    static getShuffled(paramrandom: RandomSource): Rotation[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Rotation;
    static values(): Rotation[];
    private constructor(index: number, id: string, rotation: OctahedralGroup)
    // private id: string;
    // private index: number;
    // private rotation: OctahedralGroup;
    // private getIndex(): number;
    getRotated(rot: Rotation): Rotation;
    getSerializedName(): string;
    rotate(rotation: number, steps: number): number;
    rotate(direction: Direction): Direction;
    rotation(): OctahedralGroup;
    name(): "NONE" | "CLOCKWISE_90" | "CLOCKWISE_180" | "COUNTERCLOCKWISE_90";
}