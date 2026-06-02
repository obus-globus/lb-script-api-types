import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { MobEffect } from '../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { SpawnGroupData } from '../../../../../../net/minecraft/world/entity/SpawnGroupData.d.ts'
export class Spider$SpiderEffectsGroupData extends Object implements SpawnGroupData {
    constructor()
    effect: Holder<MobEffect>;
    setRandomEffect(random: RandomSource): void;
}