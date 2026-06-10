import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModInitializer } from '../../../../../../net/fabricmc/api/ModInitializer.d.ts'
import type { ResourceCondition } from '../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Logger } from '../../../../../../org/slf4j/Logger.d.ts'
export class ResourceConditionsImpl extends Object implements ModInitializer {
    static DISABLED_RESOURCE_EXCEPTION: Exception;
    static LOGGER: Logger;
    static currentFeatures: FeatureFlagSet;
    static applyResourceConditions(paramarg0: JsonObject, paramarg1: string, paramarg2: Identifier, paramarg3: RegistryOps$RegistryInfoLookup): boolean;
    static conditionsMet(paramarg0: ResourceCondition[], paramarg1: RegistryOps$RegistryInfoLookup, paramarg2: boolean): boolean;
    static featuresEnabled(paramarg0: Identifier[]): boolean;
    static modsLoaded(paramarg0: string[], paramarg1: boolean): boolean;
    static registryContains(paramarg0: RegistryOps$RegistryInfoLookup, paramarg1: Identifier, paramarg2: Identifier[]): boolean;
    static tagsPopulated(paramarg0: RegistryOps$RegistryInfoLookup, paramarg1: Identifier, paramarg2: Identifier[]): boolean;
    constructor()
    onInitialize(): void;
}