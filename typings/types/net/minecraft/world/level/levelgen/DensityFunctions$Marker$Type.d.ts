import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { DensityFunctions$MarkerOrMarked } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$MarkerOrMarked.d.ts'
export class DensityFunctions$Marker$Type extends Enum<DensityFunctions$Marker$Type> implements StringRepresentable {
    static BlendDensity: DensityFunctions$Marker$Type;
    static Cache2D: DensityFunctions$Marker$Type;
    static CacheAllInCell: DensityFunctions$Marker$Type;
    static CacheOnce: DensityFunctions$Marker$Type;
    static FlatCache: DensityFunctions$Marker$Type;
    static Interpolated: DensityFunctions$Marker$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DensityFunctions$Marker$Type;
    static values(): DensityFunctions$Marker$Type[];
    private constructor(name: string)
    // private codec: KeyDispatchDataCodec<DensityFunctions$MarkerOrMarked>;
    // private name: string;
    getSerializedName(): string;
    name(): "Interpolated" | "FlatCache" | "Cache2D" | "CacheOnce" | "CacheAllInCell" | "BlendDensity";
}