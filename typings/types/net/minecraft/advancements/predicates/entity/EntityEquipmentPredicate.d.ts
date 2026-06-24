import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemPredicate } from '../../../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { EntitySubPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntitySubPredicate.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { BannerPattern } from '../../../../../net/minecraft/world/level/block/entity/BannerPattern.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityEquipmentPredicate extends Record implements EntitySubPredicate {
    static ALWAYS_TRUE: EntitySubPredicate;
    static CODEC: Codec<EntityEquipmentPredicate>;
    static captainPredicate(paramitems: HolderGetter<Item>, parampatternGetter: HolderGetter<BannerPattern>): EntityEquipmentPredicate;
    constructor(head: Optional<ItemPredicate>, chest: Optional<ItemPredicate>, legs: Optional<ItemPredicate>, feet: Optional<ItemPredicate>, body: Optional<ItemPredicate>, mainhand: Optional<ItemPredicate>, offhand: Optional<ItemPredicate>)
    // private body: Optional<ItemPredicate>;
    // private chest: Optional<ItemPredicate>;
    // private feet: Optional<ItemPredicate>;
    // private head: Optional<ItemPredicate>;
    // private legs: Optional<ItemPredicate>;
    // private mainhand: Optional<ItemPredicate>;
    // private offhand: Optional<ItemPredicate>;
    and(other: EntitySubPredicate): EntitySubPredicate;
    body(): Optional<ItemPredicate>;
    chest(): Optional<ItemPredicate>;
    equals(o: Object | null): boolean;
    feet(): Optional<ItemPredicate>;
    hashCode(): number;
    head(): Optional<ItemPredicate>;
    legs(): Optional<ItemPredicate>;
    mainhand(): Optional<ItemPredicate>;
    matches(entity: Entity): boolean;
    matches(entity: Entity, level: ServerLevel, position: Vec3): boolean;
    offhand(): Optional<ItemPredicate>;
    toString(): string;
}