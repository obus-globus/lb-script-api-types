import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceConditionType } from '../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceConditionType.d.ts'
import type { AllModsLoadedResourceCondition } from '../../../../../../net/fabricmc/fabric/impl/resource/conditions/conditions/AllModsLoadedResourceCondition.d.ts'
import type { AndResourceCondition } from '../../../../../../net/fabricmc/fabric/impl/resource/conditions/conditions/AndResourceCondition.d.ts'
import type { AnyModsLoadedResourceCondition } from '../../../../../../net/fabricmc/fabric/impl/resource/conditions/conditions/AnyModsLoadedResourceCondition.d.ts'
import type { FalseResourceCondition } from '../../../../../../net/fabricmc/fabric/impl/resource/conditions/conditions/FalseResourceCondition.d.ts'
import type { FeaturesEnabledResourceCondition } from '../../../../../../net/fabricmc/fabric/impl/resource/conditions/conditions/FeaturesEnabledResourceCondition.d.ts'
import type { NotResourceCondition } from '../../../../../../net/fabricmc/fabric/impl/resource/conditions/conditions/NotResourceCondition.d.ts'
import type { OrResourceCondition } from '../../../../../../net/fabricmc/fabric/impl/resource/conditions/conditions/OrResourceCondition.d.ts'
import type { RegistryContainsResourceCondition } from '../../../../../../net/fabricmc/fabric/impl/resource/conditions/conditions/RegistryContainsResourceCondition.d.ts'
import type { TagsPopulatedResourceCondition } from '../../../../../../net/fabricmc/fabric/impl/resource/conditions/conditions/TagsPopulatedResourceCondition.d.ts'
import type { TrueResourceCondition } from '../../../../../../net/fabricmc/fabric/impl/resource/conditions/conditions/TrueResourceCondition.d.ts'
export class DefaultResourceConditionTypes extends Object {
    static ALL_MODS_LOADED: ResourceConditionType<AllModsLoadedResourceCondition>;
    static AND: ResourceConditionType<AndResourceCondition>;
    static ANY_MODS_LOADED: ResourceConditionType<AnyModsLoadedResourceCondition>;
    static FALSE: ResourceConditionType<FalseResourceCondition>;
    static FEATURES_ENABLED: ResourceConditionType<FeaturesEnabledResourceCondition>;
    static NOT: ResourceConditionType<NotResourceCondition>;
    static OR: ResourceConditionType<OrResourceCondition>;
    static REGISTRY_CONTAINS: ResourceConditionType<RegistryContainsResourceCondition>;
    static TAGS_POPULATED: ResourceConditionType<TagsPopulatedResourceCondition>;
    static TRUE: ResourceConditionType<TrueResourceCondition>;
    constructor()
}