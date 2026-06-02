import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentMatchers } from '../../../../net/minecraft/advancements/criterion/DataComponentMatchers.d.ts'
import type { DistancePredicate } from '../../../../net/minecraft/advancements/criterion/DistancePredicate.d.ts'
import type { EntityEquipmentPredicate } from '../../../../net/minecraft/advancements/criterion/EntityEquipmentPredicate.d.ts'
import type { EntityEquipmentPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/EntityEquipmentPredicate$Builder.d.ts'
import type { EntityFlagsPredicate } from '../../../../net/minecraft/advancements/criterion/EntityFlagsPredicate.d.ts'
import type { EntityFlagsPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/EntityFlagsPredicate$Builder.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/criterion/EntityPredicate.d.ts'
import type { EntitySubPredicate } from '../../../../net/minecraft/advancements/criterion/EntitySubPredicate.d.ts'
import type { EntityTypePredicate } from '../../../../net/minecraft/advancements/criterion/EntityTypePredicate.d.ts'
import type { LocationPredicate } from '../../../../net/minecraft/advancements/criterion/LocationPredicate.d.ts'
import type { LocationPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/LocationPredicate$Builder.d.ts'
import type { MobEffectsPredicate } from '../../../../net/minecraft/advancements/criterion/MobEffectsPredicate.d.ts'
import type { MobEffectsPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/MobEffectsPredicate$Builder.d.ts'
import type { MovementPredicate } from '../../../../net/minecraft/advancements/criterion/MovementPredicate.d.ts'
import type { NbtPredicate } from '../../../../net/minecraft/advancements/criterion/NbtPredicate.d.ts'
import type { SlotsPredicate } from '../../../../net/minecraft/advancements/criterion/SlotsPredicate.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
export class EntityPredicate$Builder extends Object {
    static entity(): EntityPredicate$Builder;
    constructor()
    // private components: DataComponentMatchers;
    // private distanceToPlayer: Optional<DistancePredicate>;
    // private effects: Optional<MobEffectsPredicate>;
    // private entityType: Optional<EntityTypePredicate>;
    // private equipment: Optional<EntityEquipmentPredicate>;
    // private flags: Optional<EntityFlagsPredicate>;
    // private located: Optional<LocationPredicate>;
    // private movement: Optional<MovementPredicate>;
    // private movementAffectedBy: Optional<LocationPredicate>;
    // private nbt: Optional<NbtPredicate>;
    // private passenger: Optional<EntityPredicate>;
    // private periodicTick: Optional<number>;
    // private slots: Optional<SlotsPredicate>;
    // private steppingOnLocation: Optional<LocationPredicate>;
    // private subPredicate: Optional<EntitySubPredicate>;
    // private targetedEntity: Optional<EntityPredicate>;
    // private team: Optional<string>;
    // private vehicle: Optional<EntityPredicate>;
    build(): EntityPredicate;
    components(components: DataComponentMatchers): EntityPredicate$Builder;
    distance(distanceToPlayer: DistancePredicate): EntityPredicate$Builder;
    effects(effects: MobEffectsPredicate$Builder): EntityPredicate$Builder;
    entityType(entityType: EntityTypePredicate): EntityPredicate$Builder;
    equipment(equipment: EntityEquipmentPredicate): EntityPredicate$Builder;
    equipment(equipment: EntityEquipmentPredicate$Builder): EntityPredicate$Builder;
    flags(flags: EntityFlagsPredicate$Builder): EntityPredicate$Builder;
    located(location: LocationPredicate$Builder): EntityPredicate$Builder;
    movementAffectedBy(location: LocationPredicate$Builder): EntityPredicate$Builder;
    moving(movement: MovementPredicate): EntityPredicate$Builder;
    nbt(nbt: NbtPredicate): EntityPredicate$Builder;
    of(lookup: HolderGetter<EntityType<Object>>, entityTypeTag: TagKey<EntityType<Object>>): EntityPredicate$Builder;
    of(lookup: HolderGetter<EntityType<Object>>, entityType: EntityType<Object>): EntityPredicate$Builder;
    passenger(passenger: EntityPredicate$Builder): EntityPredicate$Builder;
    periodicTick(period: number): EntityPredicate$Builder;
    slots(slots: SlotsPredicate): EntityPredicate$Builder;
    steppingOn(location: LocationPredicate$Builder): EntityPredicate$Builder;
    subPredicate(subPredicate: EntitySubPredicate): EntityPredicate$Builder;
    targetedEntity(targetedEntity: EntityPredicate$Builder): EntityPredicate$Builder;
    team(team: string): EntityPredicate$Builder;
    vehicle(vehicle: EntityPredicate$Builder): EntityPredicate$Builder;
}