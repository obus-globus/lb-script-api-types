import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemPredicate } from '../../../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { ItemPredicate$Builder } from '../../../../../net/minecraft/advancements/predicates/ItemPredicate$Builder.d.ts'
import type { EntityEquipmentPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntityEquipmentPredicate.d.ts'
export class EntityEquipmentPredicate$Builder extends Object {
    static equipment(): EntityEquipmentPredicate$Builder;
    constructor()
    // private body: Optional<ItemPredicate>;
    // private chest: Optional<ItemPredicate>;
    // private feet: Optional<ItemPredicate>;
    // private head: Optional<ItemPredicate>;
    // private legs: Optional<ItemPredicate>;
    // private mainhand: Optional<ItemPredicate>;
    // private offhand: Optional<ItemPredicate>;
    body(body: ItemPredicate$Builder): EntityEquipmentPredicate$Builder;
    build(): EntityEquipmentPredicate;
    chest(chest: ItemPredicate$Builder): EntityEquipmentPredicate$Builder;
    feet(feet: ItemPredicate$Builder): EntityEquipmentPredicate$Builder;
    head(head: ItemPredicate$Builder): EntityEquipmentPredicate$Builder;
    legs(legs: ItemPredicate$Builder): EntityEquipmentPredicate$Builder;
    mainhand(mainhand: ItemPredicate$Builder): EntityEquipmentPredicate$Builder;
    offhand(offhand: ItemPredicate$Builder): EntityEquipmentPredicate$Builder;
}