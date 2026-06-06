import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
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
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GenerationStep$Decoration;
    static values(): (Object | null)[];
    private constructor(name: string)
    getName(): string;
    getSerializedName(): string;
    name(): "RAW_GENERATION" | "LAKES" | "LOCAL_MODIFICATIONS" | "UNDERGROUND_STRUCTURES" | "SURFACE_STRUCTURES" | "STRONGHOLDS" | "UNDERGROUND_ORES" | "UNDERGROUND_DECORATION" | "FLUID_SPRINGS" | "VEGETAL_DECORATION" | "TOP_LAYER_MODIFICATION";
}