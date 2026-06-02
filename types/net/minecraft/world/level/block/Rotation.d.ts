import type { OctahedralGroup } from '../../../../../com/mojang/math/OctahedralGroup.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class Rotation extends Enum<Rotation> implements StringRepresentable {
    static BY_ID: (param0: Rotation) => unknown;
    static CLOCKWISE_180: Rotation;
    static CLOCKWISE_90: Rotation;
    static CODEC: Codec<Rotation>;
    static COUNTERCLOCKWISE_90: Rotation;
    static LEGACY_CODEC: Codec<Rotation>;
    static NONE: Rotation;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, Rotation>;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static getRandom(paramrandom: RandomSource): Rotation;
    static getShuffled(paramrandom: RandomSource): Rotation[];
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Rotation;
    static values(): (Object | null)[];
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