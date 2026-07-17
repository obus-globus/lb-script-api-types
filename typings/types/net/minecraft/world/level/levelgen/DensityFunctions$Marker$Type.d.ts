import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { DensityFunctions$MarkerOrMarked } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$MarkerOrMarked.d.ts'
export class DensityFunctions$Marker$Type extends Enum<DensityFunctions$Marker$Type> implements StringRepresentable {
    static BlendDensity: DensityFunctions$Marker$Type;
    static Cache2D: DensityFunctions$Marker$Type;
    static CacheAllInCell: DensityFunctions$Marker$Type;
    static CacheOnce: DensityFunctions$Marker$Type;
    static FlatCache: DensityFunctions$Marker$Type;
    static Interpolated: DensityFunctions$Marker$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DensityFunctions$Marker$Type;
    static values(): DensityFunctions$Marker$Type[];
    private constructor(name: string)
    // private codec: KeyDispatchDataCodec<DensityFunctions$MarkerOrMarked>;
    // private name: string;
    getSerializedName(): string;
    name(): "Interpolated" | "FlatCache" | "Cache2D" | "CacheOnce" | "CacheAllInCell" | "BlendDensity";
}