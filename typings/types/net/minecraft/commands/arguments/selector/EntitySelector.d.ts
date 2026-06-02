import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../../net/minecraft/advancements/criterion/MinMaxBounds$Doubles.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { EntityTypeTest } from '../../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntitySelector extends Object {
    static COMPILABLE_CODEC: Codec<Object>;
    static INFINITE: number;
    static ORDER_ARBITRARY: (param0: Vec3, param1: Object | null) => void;
    static joinNames(paramentities: (Object | null)[]): Component;
    constructor(maxResults: number, includesEntities: boolean, worldLimited: boolean, contextFreePredicates: (param0: Entity) => kotlin.Boolean[], range: MinMaxBounds$Doubles, position: (param0: Vec3) => Vec3, aabb: AABB, order: (param0: Vec3, param1: Entity[]) => void, currentEntity: boolean, playerName: string, entityUUID: UUID, type: EntityType<Object>, usesSelector: boolean)
    // private aabb: AABB;
    // private contextFreePredicates: (param0: Entity) => kotlin.Boolean[];
    // private currentEntity: boolean;
    // private entityUUID: UUID;
    // private includesEntities: boolean;
    readonly maxResults: number;
    // private order: (param0: Vec3, param1: Entity[]) => void;
    // private playerName: string;
    // private position: (param0: Vec3) => Vec3;
    // private range: MinMaxBounds$Doubles;
    // private type: EntityTypeTest<Entity, Object>;
    // private usesSelector: boolean;
    readonly worldLimited: boolean;
    // private addEntities(result: Entity[], level: ServerLevel, absoluteAABB: AABB, predicate: (param0: Entity) => kotlin.Boolean): void;
    // private checkPermissions(sender: CommandSourceStack): void;
    findEntities(sender: CommandSourceStack): Entity[];
    findPlayers(sender: CommandSourceStack): ServerPlayer[];
    findSingleEntity(sender: CommandSourceStack): Entity;
    findSinglePlayer(sender: CommandSourceStack): ServerPlayer;
    // private getAbsoluteAabb(pos: Vec3): AABB;
    getMaxResults(): number;
    // private getPredicate(pos: Vec3, absoluteAabb: AABB, enabledFeatures: FeatureFlagSet): (param0: Entity) => kotlin.Boolean;
    // private getResultLimit(): number;
    includesEntities(): boolean;
    isSelfSelector(): boolean;
    isWorldLimited(): boolean;
    // private sortAndLimit(pos: Vec3, result: T[]): T[];
    usesSelector(): boolean;
}