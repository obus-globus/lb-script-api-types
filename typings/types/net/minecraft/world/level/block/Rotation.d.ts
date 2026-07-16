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
    static BY_ID: (param0: number) => Rotation;
    static CLOCKWISE_180: Rotation;
    static CLOCKWISE_90: Rotation;
    static CODEC: Codec<Rotation>;
    static COUNTERCLOCKWISE_90: Rotation;
    static LEGACY_CODEC: Codec<Rotation>;
    static NONE: Rotation;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, Rotation>;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static getRandom(paramrandom: RandomSource): Rotation;
    static getShuffled(paramrandom: RandomSource): Rotation[];
    static keys(paramvalues: StringRepresentable[]): Keyable;
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