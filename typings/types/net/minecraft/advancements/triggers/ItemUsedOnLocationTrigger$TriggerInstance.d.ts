import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { ItemPredicate$Builder } from '../../../../net/minecraft/advancements/predicates/ItemPredicate$Builder.d.ts'
import type { LocationPredicate$Builder } from '../../../../net/minecraft/advancements/predicates/LocationPredicate$Builder.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Property } from '../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
import type { LootItemCondition } from '../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class ItemUsedOnLocationTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<ItemUsedOnLocationTrigger$TriggerInstance>;
    static allayDropItemOnBlock(paramlocation: LocationPredicate$Builder, paramitem: ItemPredicate$Builder): Criterion<ItemUsedOnLocationTrigger$TriggerInstance>;
    static itemUsedOnBlock(paramlocation: LocationPredicate$Builder, paramitem: ItemPredicate$Builder): Criterion<ItemUsedOnLocationTrigger$TriggerInstance>;
    static placedBlock(paramblock: Block): Criterion<ItemUsedOnLocationTrigger$TriggerInstance>;
    static placedBlock(paramconditions: () => LootItemCondition[]): Criterion<ItemUsedOnLocationTrigger$TriggerInstance>;
    static placedBlockWithProperties<T extends Comparable<T> & StringRepresentable>(paramblock: Block, paramproperties: Property<T>, parampropertyValue: T): Criterion<ItemUsedOnLocationTrigger$TriggerInstance>;
    static placedBlockWithProperties<T extends Comparable<T>>(paramblock: Block, paramproperty: Property<T>, parampropertyValue: string): Criterion<ItemUsedOnLocationTrigger$TriggerInstance>;
    static placedBlockWithProperties(paramblock: Block, paramproperty: Property<boolean>, parampropertyValue: boolean): Criterion<ItemUsedOnLocationTrigger$TriggerInstance>;
    static placedBlockWithProperties(paramblock: Block, paramproperty: Property<number>, parampropertyValue: number): Criterion<ItemUsedOnLocationTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, location: Optional<ContextAwarePredicate>)
    // private location: Optional<ContextAwarePredicate>;
    // private player: Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    location(): Optional<ContextAwarePredicate>;
    matches(locationContext: LootContext): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}