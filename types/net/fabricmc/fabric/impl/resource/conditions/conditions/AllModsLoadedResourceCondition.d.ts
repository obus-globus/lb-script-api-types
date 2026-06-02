import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { ResourceConditionType } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceConditionType.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../../../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
export class AllModsLoadedResourceCondition extends Record implements ResourceCondition {
    static CODEC: Codec<ResourceCondition>;
    static CODEC: MapCodec<AllModsLoadedResourceCondition>;
    static CONDITION_CODEC: Codec<ResourceCondition>;
    static LIST_CODEC: Codec<Object>;
    constructor(modIds: string[])
    // private modIds: string[];
    equals(arg0: Object | null): boolean;
    getType(): ResourceConditionType<Object>;
    hashCode(): number;
    modIds(): string[];
    test(arg0: RegistryOps$RegistryInfoLookup): boolean;
    toString(): string;
}