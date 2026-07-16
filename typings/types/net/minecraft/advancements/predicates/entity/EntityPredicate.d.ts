import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../../net/minecraft/advancements/predicates/entity/EntityPredicate$Builder.d.ts'
import type { EntitySubPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntitySubPredicate.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LootContext } from '../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityPredicate extends Object {
    static ADVANCEMENT_CODEC: Codec<ContextAwarePredicate>;
    static CODEC: Codec<EntityPredicate>;
    static createContext(paramplayer: ServerPlayer, paramentity: Entity): LootContext;
    static wrap(...parampredicates: EntityPredicate$Builder[]): ContextAwarePredicate[];
    static wrap(paramsinglePredicate: Optional<EntityPredicate>): Optional<ContextAwarePredicate>;
    static wrap(paramsinglePredicate: EntityPredicate$Builder): ContextAwarePredicate;
    static wrap(paramsinglePredicate: EntityPredicate): ContextAwarePredicate;
    constructor(parts: Map<Codec<EntitySubPredicate>, EntitySubPredicate>)
    // private combinedPart: EntitySubPredicate;
    // private parts: Map<Codec<EntitySubPredicate>, EntitySubPredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(level: ServerLevel, position: Vec3, entity: Entity): boolean;
    matches(player: ServerPlayer, entity: Entity): boolean;
    toString(): string;
}