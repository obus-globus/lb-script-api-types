import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { ResourceConditionType } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceConditionType.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class ResourceConditions extends Object {
    static CONDITIONS_KEY: string;
    static OVERLAYS_KEY: string;
    static allModsLoaded(paramarg0: (Object | null)[]): ResourceCondition;
    static alwaysFalse(): ResourceCondition;
    static alwaysTrue(): ResourceCondition;
    static and(paramarg0: (Object | null)[]): ResourceCondition;
    static anyModsLoaded(paramarg0: (Object | null)[]): ResourceCondition;
    static featuresEnabled(paramarg0: (Object | null)[]): ResourceCondition;
    static featuresEnabled(paramarg0: (Object | null)[]): ResourceCondition;
    static getConditionType(paramarg0: Identifier): ResourceConditionType<any>;
    static not(paramarg0: ResourceCondition): ResourceCondition;
    static or(paramarg0: (Object | null)[]): ResourceCondition;
    static register(paramarg0: ResourceConditionType<any>): void;
    static registryContains(paramarg0: ResourceKey<(Object | null)[]>, paramarg1: (Object | null)[]): ResourceCondition;
    static registryContains(paramarg0: Object | null): ResourceCondition;
    static tagsPopulated(paramarg0: ResourceKey<(Object | null)[]>, paramarg1: Object | null): ResourceCondition;
    static tagsPopulated(paramarg0: Object | null): ResourceCondition;
    private constructor()
}