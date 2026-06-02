import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceConditionType } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceConditionType.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../../../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
export interface ResourceCondition extends Object{
    getType(): ResourceConditionType<Object>;
    test(arg0: RegistryOps$RegistryInfoLookup): boolean;
}