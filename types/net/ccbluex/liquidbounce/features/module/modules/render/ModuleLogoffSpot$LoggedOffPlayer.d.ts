import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ModuleLogoffSpot$LoggedOffPlayer extends Record {
    constructor(time: Instant, entity: Entity)
    // private entity: Entity;
    /*not mapped: */ entity(): Entity;
    // private time: Instant;
    /*not mapped: */ time(): Instant;
    component1(): Instant;
    component2(): Entity;
    copy(time: Instant, entity: Entity): ModuleLogoffSpot$LoggedOffPlayer;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}