import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class GenerationStep$Decoration extends Enum<GenerationStep$Decoration> implements StringRepresentable {
    static CODEC: Codec<GenerationStep$Decoration>;
    static FLUID_SPRINGS: GenerationStep$Decoration;
    static LAKES: GenerationStep$Decoration;
    static LOCAL_MODIFICATIONS: GenerationStep$Decoration;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RAW_GENERATION: GenerationStep$Decoration;
    static STRONGHOLDS: GenerationStep$Decoration;
    static SURFACE_STRUCTURES: GenerationStep$Decoration;
    static TOP_LAYER_MODIFICATION: GenerationStep$Decoration;
    static UNDERGROUND_DECORATION: GenerationStep$Decoration;
    static UNDERGROUND_ORES: GenerationStep$Decoration;
    static UNDERGROUND_STRUCTURES: GenerationStep$Decoration;
    static VEGETAL_DECORATION: GenerationStep$Decoration;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GenerationStep$Decoration;
    static values(): GenerationStep$Decoration[];
    private constructor(name: string)
    getName(): string;
    getSerializedName(): string;
    name(): "RAW_GENERATION" | "LAKES" | "LOCAL_MODIFICATIONS" | "UNDERGROUND_STRUCTURES" | "SURFACE_STRUCTURES" | "STRONGHOLDS" | "UNDERGROUND_ORES" | "UNDERGROUND_DECORATION" | "FLUID_SPRINGS" | "VEGETAL_DECORATION" | "TOP_LAYER_MODIFICATION";
}