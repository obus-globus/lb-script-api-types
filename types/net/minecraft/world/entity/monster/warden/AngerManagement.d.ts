import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AngerManagement$Sorter } from '../../../../../../net/minecraft/world/entity/monster/warden/AngerManagement$Sorter.d.ts'
export class AngerManagement extends Object {
    static codec(paramfilter: (param0: Entity) => kotlin.Boolean): Codec<AngerManagement>;
    constructor(filter: (param0: Entity) => kotlin.Boolean, angerByUuid: Pair<UUID, number>[])
    // private angerBySuspect: Object2IntMap<Entity>;
    // private angerByUuid: Object2IntMap<UUID>;
    // private conversionDelay: number;
    // private filter: (param0: Entity) => kotlin.Boolean;
    // private highestAnger: number;
    // private suspectSorter: AngerManagement$Sorter;
    // private suspects: Entity[];
    clearAnger(entity: Entity): void;
    // private convertFromUuids(level: ServerLevel): void;
    // private createUuidAngerPairs(): Pair<UUID, number>[];
    getActiveAnger(currentTarget: Entity): number;
    getActiveEntity(): Optional<LivingEntity>;
    // private getTopSuspect(): Entity;
    increaseAnger(entity: Entity, increment: number): number;
    // private sortAndUpdateHighestAnger(): void;
    tick(level: ServerLevel, validEntity: (param0: Entity) => kotlin.Boolean): void;
}