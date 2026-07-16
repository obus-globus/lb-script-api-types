import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { StructurePlacement$FrequencyReducer } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement$FrequencyReducer.d.ts'
export class StructurePlacement$FrequencyReductionMethod extends Enum<StructurePlacement$FrequencyReductionMethod> implements StringRepresentable {
    static CODEC: Codec<StructurePlacement$FrequencyReductionMethod>;
    static DEFAULT: StructurePlacement$FrequencyReductionMethod;
    static LEGACY_TYPE_1: StructurePlacement$FrequencyReductionMethod;
    static LEGACY_TYPE_2: StructurePlacement$FrequencyReductionMethod;
    static LEGACY_TYPE_3: StructurePlacement$FrequencyReductionMethod;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StructurePlacement$FrequencyReductionMethod;
    static values(): StructurePlacement$FrequencyReductionMethod[];
    private constructor(name: string, reducer: (param0: number, param1: number, param2: number, param3: number, param4: number) => boolean)
    // private name: string;
    // private reducer: (param0: number, param1: number, param2: number, param3: number, param4: number) => boolean;
    getSerializedName(): string;
    shouldGenerate(seed: number, salt: number, sourceX: number, sourceZ: number, probability: number): boolean;
    name(): "DEFAULT" | "LEGACY_TYPE_1" | "LEGACY_TYPE_2" | "LEGACY_TYPE_3";
}