import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SpawnGroupData } from '../../../../net/minecraft/world/entity/SpawnGroupData.d.ts'
export class AgeableMob$AgeableMobGroupData extends Object implements SpawnGroupData {
    constructor(shouldSpawnBaby: boolean)
    constructor(shouldSpawnBaby: boolean, babySpawnChance: number)
    constructor(babySpawnChance: number)
    readonly babySpawnChance: number;
    readonly groupSize: number;
    readonly shouldSpawnBaby: boolean;
    getBabySpawnChance(): number;
    getGroupSize(): number;
    increaseGroupSizeByOne(): void;
    isShouldSpawnBaby(): boolean;
}