import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { ResourceConditionType } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceConditionType.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../../../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
export class TagsPopulatedResourceCondition extends Record implements ResourceCondition {
    static CODEC: Codec<ResourceCondition>;
    static CODEC: MapCodec<TagsPopulatedResourceCondition>;
    static CONDITION_CODEC: Codec<ResourceCondition>;
    static LIST_CODEC: Codec<Object>;
    constructor(arg0: TagKey<T>[])
    constructor(arg0: Identifier, arg1: TagKey<T>[])
    constructor(registry: Identifier, tags: Identifier[])
    // private registry: Identifier;
    // private tags: Identifier[];
    equals(arg0: Object | null): boolean;
    getType(): ResourceConditionType<Object>;
    hashCode(): number;
    registry(): Identifier;
    tags(): Identifier[];
    test(arg0: RegistryOps$RegistryInfoLookup): boolean;
    toString(): string;
}