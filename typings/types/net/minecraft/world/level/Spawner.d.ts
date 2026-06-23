import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
export interface Spawner extends Object{
    setEntityId(type: EntityType<any>, random: RandomSource): void;
}