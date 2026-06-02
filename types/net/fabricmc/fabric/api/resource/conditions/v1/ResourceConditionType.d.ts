import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ResourceConditionType<T extends ResourceCondition> extends Object{
    codec(): MapCodec<T>;
    id(): Identifier;
}