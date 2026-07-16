import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { ResourceConditionType } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceConditionType.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { FeatureFlag } from '../../../../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
export class ResourceConditions extends Object {
    static CONDITIONS_KEY: string;
    static OVERLAYS_KEY: string;
    static allModsLoaded(...paramarg0: string[]): ResourceCondition;
    static alwaysFalse(): ResourceCondition;
    static alwaysTrue(): ResourceCondition;
    static and(...paramarg0: ResourceCondition[]): ResourceCondition;
    static anyModsLoaded(...paramarg0: string[]): ResourceCondition;
    static featuresEnabled(...paramarg0: Identifier[]): ResourceCondition;
    static featuresEnabled(...paramarg0: FeatureFlag[]): ResourceCondition;
    static getConditionType(paramarg0: Identifier): ResourceConditionType<any>;
    static not(paramarg0: ResourceCondition): ResourceCondition;
    static or(...paramarg0: ResourceCondition[]): ResourceCondition;
    static register(paramarg0: ResourceConditionType<any>): void;
    static registryContains<T extends unknown>(paramarg0: ResourceKey<T[]>, ...paramarg1: Identifier[]): ResourceCondition;
    static registryContains<T extends unknown>(...paramarg0: ResourceKey<T>[]): ResourceCondition;
    static tagsPopulated<T extends unknown>(paramarg0: ResourceKey<T[]>, ...paramarg1: TagKey<T>[]): ResourceCondition;
    static tagsPopulated<T extends unknown>(...paramarg0: TagKey<T>[]): ResourceCondition;
    private constructor()
}