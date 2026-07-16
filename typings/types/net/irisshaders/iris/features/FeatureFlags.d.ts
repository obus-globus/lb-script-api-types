import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FeatureFlags extends Enum<FeatureFlags> {
    static BLOCK_EMISSION_ATTRIBUTE: FeatureFlags;
    static CAN_DISABLE_WEATHER: FeatureFlags;
    static COMPUTE_SHADERS: FeatureFlags;
    static CUSTOM_IMAGES: FeatureFlags;
    static ENTITY_TRANSLUCENT: FeatureFlags;
    static FADE_VARIABLE: FeatureFlags;
    static HIGHER_SHADOWCOLOR: FeatureFlags;
    static PER_BUFFER_BLENDING: FeatureFlags;
    static REVERSED_CULLING: FeatureFlags;
    static SEPARATE_HARDWARE_SAMPLERS: FeatureFlags;
    static SSBO: FeatureFlags;
    static TESSELLATION_SHADERS: FeatureFlags;
    static TEXTURE_FILTERING: FeatureFlags;
    static UNKNOWN: FeatureFlags;
    static getInvalidStatus(paramarg0: FeatureFlags[]): string;
    static getValue(paramarg0: string): FeatureFlags;
    static isInvalid(paramarg0: string): boolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FeatureFlags;
    static values(): FeatureFlags[];
    private constructor(arg2: () => boolean, arg3: () => boolean)
    // private hardwareRequirement: () => boolean;
    // private irisRequirement: () => boolean;
    getHumanReadableName(): string;
    isUsable(): boolean;
    name(): "SEPARATE_HARDWARE_SAMPLERS" | "HIGHER_SHADOWCOLOR" | "CUSTOM_IMAGES" | "PER_BUFFER_BLENDING" | "COMPUTE_SHADERS" | "TESSELLATION_SHADERS" | "ENTITY_TRANSLUCENT" | "REVERSED_CULLING" | "BLOCK_EMISSION_ATTRIBUTE" | "CAN_DISABLE_WEATHER" | "SSBO" | "FADE_VARIABLE" | "TEXTURE_FILTERING" | "UNKNOWN";
}