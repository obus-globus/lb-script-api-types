import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { ResourceConditionType } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceConditionType.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../../../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
import type { FeatureFlag } from '../../../../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
export class FeaturesEnabledResourceCondition extends Record implements ResourceCondition {
    static CODEC: MapCodec<FeaturesEnabledResourceCondition>;
    static CONDITION_CODEC: Codec<ResourceCondition>;
    static LIST_CODEC: Codec<ResourceCondition[]>;
    constructor(...arg0: Identifier[])
    constructor(...arg0: FeatureFlag[])
    constructor(features: Identifier[])
    // private features: Identifier[];
    equals(arg0: Object | null): boolean;
    features(): Identifier[];
    getType(): ResourceConditionType<any>;
    hashCode(): number;
    test(arg0: RegistryOps$RegistryInfoLookup): boolean;
    toString(): string;
}