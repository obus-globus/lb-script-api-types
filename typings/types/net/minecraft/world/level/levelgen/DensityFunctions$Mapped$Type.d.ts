import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DensityFunctions$Mapped$Type;
    static values(): DensityFunctions$Mapped$Type[];
    private constructor(name: string)
    // private codec: KeyDispatchDataCodec<DensityFunctions$Mapped>;
    // private name: string;
    getSerializedName(): string;
    name(): "ABS" | "SQUARE" | "CUBE" | "HALF_NEGATIVE" | "QUARTER_NEGATIVE" | "INVERT" | "SQUEEZE";
}