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
import type { DensityFunctions$Mapped } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$Mapped.d.ts'
export class DensityFunctions$Mapped$Type extends Enum<DensityFunctions$Mapped$Type> implements StringRepresentable {
    static ABS: DensityFunctions$Mapped$Type;
    static CUBE: DensityFunctions$Mapped$Type;
    static HALF_NEGATIVE: DensityFunctions$Mapped$Type;
    static INVERT: DensityFunctions$Mapped$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static QUARTER_NEGATIVE: DensityFunctions$Mapped$Type;
    static SQUARE: DensityFunctions$Mapped$Type;
    static SQUEEZE: DensityFunctions$Mapped$Type;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DensityFunctions$Mapped$Type;
    static values(): DensityFunctions$Mapped$Type[];
    private constructor(name: string)
    // private codec: KeyDispatchDataCodec<DensityFunctions$Mapped>;
    // private name: string;
    getSerializedName(): string;
    name(): "ABS" | "SQUARE" | "CUBE" | "HALF_NEGATIVE" | "QUARTER_NEGATIVE" | "INVERT" | "SQUEEZE";
}