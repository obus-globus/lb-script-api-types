import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { TameAnimalTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/TameAnimalTrigger$TriggerInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Animal } from '../../../../net/minecraft/world/entity/animal/Animal.d.ts'
export class TameAnimalTrigger extends SimpleCriterionTrigger<TameAnimalTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<TameAnimalTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, animal: Animal): void;
}