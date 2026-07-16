import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { ResourceConditionType } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceConditionType.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../../../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistryContainsResourceCondition extends Record implements ResourceCondition {
    static CODEC: MapCodec<RegistryContainsResourceCondition>;
    static CONDITION_CODEC: Codec<ResourceCondition>;
    static LIST_CODEC: Codec<ResourceCondition[]>;
    constructor(...arg0: ResourceKey<Object>[])
    constructor(arg0: Identifier, ...arg1: Identifier[])
    constructor(registry: Identifier, entries: Identifier[])
    // private entries: Identifier[];
    // private registry: Identifier;
    entries(): Identifier[];
    equals(arg0: Object | null): boolean;
    getType(): ResourceConditionType<any>;
    hashCode(): number;
    registry(): Identifier;
    test(arg0: RegistryOps$RegistryInfoLookup): boolean;
    toString(): string;
}