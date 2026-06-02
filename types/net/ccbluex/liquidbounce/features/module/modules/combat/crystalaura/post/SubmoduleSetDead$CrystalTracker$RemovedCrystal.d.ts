import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { EndCrystal } from '../../../../../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
export class SubmoduleSetDead$CrystalTracker$RemovedCrystal extends Record {
    constructor(entity: EndCrystal, level: ClientLevel)
    // private entity: EndCrystal;
    /*not mapped: */ entity(): EndCrystal;
    // private level: ClientLevel;
    /*not mapped: */ level(): ClientLevel;
    component1(): EndCrystal;
    component2(): ClientLevel;
    copy(entity: EndCrystal, level: ClientLevel): SubmoduleSetDead$CrystalTracker$RemovedCrystal;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}