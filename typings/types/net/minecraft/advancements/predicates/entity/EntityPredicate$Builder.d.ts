import type { ImmutableMap$Builder } from '../../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentMatchers } from '../../../../../net/minecraft/advancements/predicates/DataComponentMatchers.d.ts'
import type { DistancePredicate } from '../../../../../net/minecraft/advancements/predicates/DistancePredicate.d.ts'
import type { LocationPredicate$Builder } from '../../../../../net/minecraft/advancements/predicates/LocationPredicate$Builder.d.ts'
import type { MobEffectsPredicate$Builder } from '../../../../../net/minecraft/advancements/predicates/MobEffectsPredicate$Builder.d.ts'
import type { NbtPredicate } from '../../../../../net/minecraft/advancements/predicates/NbtPredicate.d.ts'
import type { SlotsPredicate } from '../../../../../net/minecraft/advancements/predicates/SlotsPredicate.d.ts'
import type { CubeMobPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/CubeMobPredicate.d.ts'
import type { EntityEquipmentPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntityEquipmentPredicate.d.ts'
import type { EntityEquipmentPredicate$Builder } from '../../../../../net/minecraft/advancements/predicates/entity/EntityEquipmentPredicate$Builder.d.ts'
import type { EntityFlagsPredicate$Builder } from '../../../../../net/minecraft/advancements/predicates/entity/EntityFlagsPredicate$Builder.d.ts'
import type { EntityPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntityPredicate.d.ts'
import type { EntitySubPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntitySubPredicate.d.ts'
import type { EntityTypePredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntityTypePredicate.d.ts'
import type { FishingHookPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/FishingHookPredicate.d.ts'
import type { LightningBoltPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/LightningBoltPredicate.d.ts'
import type { MovementPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/MovementPredicate.d.ts'
import type { PlayerPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/PlayerPredicate.d.ts'
import type { RaiderPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/RaiderPredicate.d.ts'
import type { SheepPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/SheepPredicate.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { DataComponentExactPredicate } from '../../../../../net/minecraft/core/component/DataComponentExactPredicate.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
export class EntityPredicate$Builder extends Object {
    static entity(): EntityPredicate$Builder;
    constructor()
    // private parts: ImmutableMap$Builder<Codec<EntitySubPredicate>, EntitySubPredicate>;
    build(): EntityPredicate;
    components(components: Map<DataComponentPredicate$Type<any>, DataComponentPredicate>): EntityPredicate$Builder;
    components(components: DataComponentMatchers): EntityPredicate$Builder;
    components(components: DataComponentExactPredicate): EntityPredicate$Builder;
    cubeMob(cubeMob: CubeMobPredicate): EntityPredicate$Builder;
    distance(distanceToPlayer: DistancePredicate): EntityPredicate$Builder;
    effects(effects: MobEffectsPredicate$Builder): EntityPredicate$Builder;
    entityType(entityType: EntityTypePredicate): EntityPredicate$Builder;
    equipment(equipment: EntityEquipmentPredicate): EntityPredicate$Builder;
    equipment(equipment: EntityEquipmentPredicate$Builder): EntityPredicate$Builder;
    fishingHook(fishingHook: FishingHookPredicate): EntityPredicate$Builder;
    flags(flags: EntityFlagsPredicate$Builder): EntityPredicate$Builder;
    lightingBolt(lightningBolt: LightningBoltPredicate): EntityPredicate$Builder;
    located(location: LocationPredicate$Builder): EntityPredicate$Builder;
    movementAffectedBy(location: LocationPredicate$Builder): EntityPredicate$Builder;
    moving(movement: MovementPredicate): EntityPredicate$Builder;
    nbt(nbt: NbtPredicate): EntityPredicate$Builder;
    of(lookup: HolderGetter<EntityType<any>>, entityTypeTag: TagKey<EntityType<any>>): EntityPredicate$Builder;
    of(lookup: HolderGetter<EntityType<any>>, entityType: EntityType<any>): EntityPredicate$Builder;
    passenger(passenger: EntityPredicate$Builder): EntityPredicate$Builder;
    periodicTick(period: number): EntityPredicate$Builder;
    player(player: PlayerPredicate): EntityPredicate$Builder;
    put<T extends EntitySubPredicate>(key: Codec<T>, predicate: T): EntityPredicate$Builder;
    raider(raider: RaiderPredicate): EntityPredicate$Builder;
    sheep(sheep: SheepPredicate): EntityPredicate$Builder;
    slots(slots: SlotsPredicate): EntityPredicate$Builder;
    steppingOn(location: LocationPredicate$Builder): EntityPredicate$Builder;
    targetedEntity(targetedEntity: EntityPredicate$Builder): EntityPredicate$Builder;
    team(team: string): EntityPredicate$Builder;
    vehicle(vehicle: EntityPredicate$Builder): EntityPredicate$Builder;
}