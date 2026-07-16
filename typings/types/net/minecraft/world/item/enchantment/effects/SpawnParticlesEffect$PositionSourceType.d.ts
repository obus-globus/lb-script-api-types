import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { SpawnParticlesEffect$PositionSourceType$CoordinateSource } from '../../../../../../net/minecraft/world/item/enchantment/effects/SpawnParticlesEffect$PositionSourceType$CoordinateSource.d.ts'
export class SpawnParticlesEffect$PositionSourceType extends Enum<SpawnParticlesEffect$PositionSourceType> implements StringRepresentable {
    static BOUNDING_BOX: SpawnParticlesEffect$PositionSourceType;
    static CODEC: Codec<SpawnParticlesEffect$PositionSourceType>;
    static ENTITY_POSITION: SpawnParticlesEffect$PositionSourceType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SpawnParticlesEffect$PositionSourceType;
    static values(): SpawnParticlesEffect$PositionSourceType[];
    private constructor(id: string, source: (param0: number, param1: number, param2: number, param3: RandomSource) => number)
    // private id: string;
    // private source: (param0: number, param1: number, param2: number, param3: RandomSource) => number;
    getCoordinate(position: number, center: number, boundingBoxSpan: number, random: RandomSource): number;
    getSerializedName(): string;
    name(): "ENTITY_POSITION" | "BOUNDING_BOX";
}