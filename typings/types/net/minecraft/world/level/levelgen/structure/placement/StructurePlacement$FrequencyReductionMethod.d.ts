import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StructurePlacement$FrequencyReducer } from '../../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement$FrequencyReducer.d.ts'
export class StructurePlacement$FrequencyReductionMethod extends Enum<StructurePlacement$FrequencyReductionMethod> implements StringRepresentable {
    static CODEC: Codec<StructurePlacement$FrequencyReductionMethod>;
    static DEFAULT: StructurePlacement$FrequencyReductionMethod;
    static LEGACY_TYPE_1: StructurePlacement$FrequencyReductionMethod;
    static LEGACY_TYPE_2: StructurePlacement$FrequencyReductionMethod;
    static LEGACY_TYPE_3: StructurePlacement$FrequencyReductionMethod;
    static PRE_BUILT_MAP_THRESHOLD: number;
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