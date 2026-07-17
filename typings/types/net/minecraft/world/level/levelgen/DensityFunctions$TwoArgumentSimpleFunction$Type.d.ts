import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { DensityFunctions$TwoArgumentSimpleFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$TwoArgumentSimpleFunction.d.ts'
export class DensityFunctions$TwoArgumentSimpleFunction$Type extends Enum<DensityFunctions$TwoArgumentSimpleFunction$Type> implements StringRepresentable {
    static ADD: DensityFunctions$TwoArgumentSimpleFunction$Type;
    static MAX: DensityFunctions$TwoArgumentSimpleFunction$Type;
    static MIN: DensityFunctions$TwoArgumentSimpleFunction$Type;
    static MUL: DensityFunctions$TwoArgumentSimpleFunction$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DensityFunctions$TwoArgumentSimpleFunction$Type;
    static values(): DensityFunctions$TwoArgumentSimpleFunction$Type[];
    private constructor(name: string)
    // private codec: KeyDispatchDataCodec<DensityFunctions$TwoArgumentSimpleFunction>;
    // private name: string;
    getSerializedName(): string;
    name(): "ADD" | "MUL" | "MIN" | "MAX";
}