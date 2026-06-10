import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class NearestVisibleLivingEntities extends Object {
    static empty(): NearestVisibleLivingEntities;
    private constructor()
    constructor(level: ServerLevel, body: LivingEntity, livingEntities: LivingEntity[])
    // private lineOfSightTest: (param0: LivingEntity) => boolean;
    // private nearbyEntities: LivingEntity[];
    contains(filter: (param0: LivingEntity) => boolean): boolean;
    contains(targetEntity: LivingEntity): boolean;
    find(filter: (param0: LivingEntity) => boolean): Stream<LivingEntity>;
    findAll(filter: (param0: LivingEntity) => boolean): LivingEntity[];
    findClosest(filter: (param0: LivingEntity) => boolean): Optional<LivingEntity>;
    nearbyEntities(): LivingEntity[];
}