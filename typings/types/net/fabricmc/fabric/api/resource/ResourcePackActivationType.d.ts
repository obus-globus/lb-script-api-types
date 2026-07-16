import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { PackActivationType } from '../../../../../net/fabricmc/fabric/api/resource/v1/pack/PackActivationType.d.ts'
export class ResourcePackActivationType extends Enum<ResourcePackActivationType> {
    static ALWAYS_ENABLED: ResourcePackActivationType;
    static DEFAULT_ENABLED: ResourcePackActivationType;
    static NORMAL: ResourcePackActivationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ResourcePackActivationType;
    static values(): ResourcePackActivationType[];
    private constructor(arg2: PackActivationType)
    // private replacement: PackActivationType;
    isEnabledByDefault(): boolean;
    name(): "NORMAL" | "DEFAULT_ENABLED" | "ALWAYS_ENABLED";
}