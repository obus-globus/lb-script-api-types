import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { BredAnimalsTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/BredAnimalsTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { AgeableMob } from '../../../../net/minecraft/world/entity/AgeableMob.d.ts'
import type { Animal } from '../../../../net/minecraft/world/entity/animal/Animal.d.ts'
export class BredAnimalsTrigger extends SimpleCriterionTrigger<BredAnimalsTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<BredAnimalsTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: BredAnimalsTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, parent: Animal, partner: Animal, child: AgeableMob): void;
}