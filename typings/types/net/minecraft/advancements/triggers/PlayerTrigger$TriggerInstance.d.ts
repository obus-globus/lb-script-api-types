import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { LocationPredicate$Builder } from '../../../../net/minecraft/advancements/predicates/LocationPredicate$Builder.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/predicates/entity/EntityPredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../net/minecraft/advancements/predicates/entity/EntityPredicate$Builder.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class PlayerTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<PlayerTrigger$TriggerInstance>;
    static avoidVibration(): Criterion<PlayerTrigger$TriggerInstance>;
    static located(paramplayer: Optional<EntityPredicate>): Criterion<PlayerTrigger$TriggerInstance>;
    static located(paramlocation: LocationPredicate$Builder): Criterion<PlayerTrigger$TriggerInstance>;
    static located(paramplayer: EntityPredicate$Builder): Criterion<PlayerTrigger$TriggerInstance>;
    static raidWon(): Criterion<PlayerTrigger$TriggerInstance>;
    static sleptInBed(): Criterion<PlayerTrigger$TriggerInstance>;
    static tick(): Criterion<PlayerTrigger$TriggerInstance>;
    static walkOnBlockWithEquipment(paramblocks: HolderGetter<Block>, paramitems: HolderGetter<Item>, paramstepOnBlock: Block, paramrequiredEquipment: Item): Criterion<PlayerTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>)
    // private player: Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}