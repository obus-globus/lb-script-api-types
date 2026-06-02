import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData } from '../../../../net/minecraft/network/syncher/SynchedEntityData.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class ItemBasedSteering extends Object {
    constructor(entityData: SynchedEntityData, boostTimeAccessor: EntityDataAccessor<number>)
    // private boostTime: number;
    // private boostTimeAccessor: EntityDataAccessor<number>;
    // private boosting: boolean;
    // private entityData: SynchedEntityData;
    boost(random: RandomSource): boolean;
    boostFactor(): number;
    // private boostTimeTotal(): number;
    onSynced(): void;
    tickBoost(): void;
}