import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PriorityProvider$SelectorCondition } from '../../../../../net/minecraft/world/entity/variant/PriorityProvider$SelectorCondition.d.ts'
import type { SpawnContext } from '../../../../../net/minecraft/world/entity/variant/SpawnContext.d.ts'
export interface SpawnCondition extends Object, PriorityProvider$SelectorCondition<SpawnContext>{
    codec(): MapCodec<SpawnCondition>;
}