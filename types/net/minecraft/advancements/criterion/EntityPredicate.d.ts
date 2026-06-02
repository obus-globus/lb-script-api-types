import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { DataComponentMatchers } from '../../../../net/minecraft/advancements/criterion/DataComponentMatchers.d.ts'
import type { DistancePredicate } from '../../../../net/minecraft/advancements/criterion/DistancePredicate.d.ts'
import type { EntityEquipmentPredicate } from '../../../../net/minecraft/advancements/criterion/EntityEquipmentPredicate.d.ts'
import type { EntityFlagsPredicate } from '../../../../net/minecraft/advancements/criterion/EntityFlagsPredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/EntityPredicate$Builder.d.ts'
import type { EntityPredicate$LocationWrapper } from '../../../../net/minecraft/advancements/criterion/EntityPredicate$LocationWrapper.d.ts'
import type { EntitySubPredicate } from '../../../../net/minecraft/advancements/criterion/EntitySubPredicate.d.ts'
import type { EntityTypePredicate } from '../../../../net/minecraft/advancements/criterion/EntityTypePredicate.d.ts'
import type { MobEffectsPredicate } from '../../../../net/minecraft/advancements/criterion/MobEffectsPredicate.d.ts'
import type { MovementPredicate } from '../../../../net/minecraft/advancements/criterion/MovementPredicate.d.ts'
import type { NbtPredicate } from '../../../../net/minecraft/advancements/criterion/NbtPredicate.d.ts'
import type { SlotsPredicate } from '../../../../net/minecraft/advancements/criterion/SlotsPredicate.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityPredicate extends Record {
    static ADVANCEMENT_CODEC: Codec<ContextAwarePredicate>;
    static CODEC: Codec<EntityPredicate>;
    static createContext(paramplayer: ServerPlayer, paramentity: Entity): LootContext;
    static wrap(parampredicates: (Object | null)[]): ContextAwarePredicate[];
    static wrap(paramsinglePredicate: Optional<EntityPredicate>): Optional<ContextAwarePredicate>;
    static wrap(paramsinglePredicate: EntityPredicate$Builder): ContextAwarePredicate;
    static wrap(paramsinglePredicate: EntityPredicate): ContextAwarePredicate;
    constructor(entityType: Optional<EntityTypePredicate>, distanceToPlayer: Optional<DistancePredicate>, movement: Optional<MovementPredicate>, location: EntityPredicate$LocationWrapper, effects: Optional<MobEffectsPredicate>, nbt: Optional<NbtPredicate>, flags: Optional<EntityFlagsPredicate>, equipment: Optional<EntityEquipmentPredicate>, subPredicate: Optional<EntitySubPredicate>, periodicTick: Optional<number>, vehicle: Optional<EntityPredicate>, passenger: Optional<EntityPredicate>, targetedEntity: Optional<EntityPredicate>, team: Optional<string>, slots: Optional<SlotsPredicate>, components: DataComponentMatchers)
    // private components: DataComponentMatchers;
    // private distanceToPlayer: Optional<DistancePredicate>;
    // private effects: Optional<MobEffectsPredicate>;
    // private entityType: Optional<EntityTypePredicate>;
    // private equipment: Optional<EntityEquipmentPredicate>;
    // private flags: Optional<EntityFlagsPredicate>;
    // private location: EntityPredicate$LocationWrapper;
    // private movement: Optional<MovementPredicate>;
    // private nbt: Optional<NbtPredicate>;
    // private passenger: Optional<EntityPredicate>;
    // private periodicTick: Optional<number>;
    // private slots: Optional<SlotsPredicate>;
    // private subPredicate: Optional<EntitySubPredicate>;
    // private targetedEntity: Optional<EntityPredicate>;
    // private team: Optional<string>;
    // private vehicle: Optional<EntityPredicate>;
    components(): DataComponentMatchers;
    distanceToPlayer(): Optional<DistancePredicate>;
    effects(): Optional<MobEffectsPredicate>;
    entityType(): Optional<EntityTypePredicate>;
    equals(o: Object | null): boolean;
    equipment(): Optional<EntityEquipmentPredicate>;
    flags(): Optional<EntityFlagsPredicate>;
    hashCode(): number;
    location(): EntityPredicate$LocationWrapper;
    matches(level: ServerLevel, position: Vec3, entity: Entity): boolean;
    matches(player: ServerPlayer, entity: Entity): boolean;
    movement(): Optional<MovementPredicate>;
    nbt(): Optional<NbtPredicate>;
    passenger(): Optional<EntityPredicate>;
    periodicTick(): Optional<number>;
    slots(): Optional<SlotsPredicate>;
    subPredicate(): Optional<EntitySubPredicate>;
    targetedEntity(): Optional<EntityPredicate>;
    team(): Optional<string>;
    toString(): string;
    vehicle(): Optional<EntityPredicate>;
}