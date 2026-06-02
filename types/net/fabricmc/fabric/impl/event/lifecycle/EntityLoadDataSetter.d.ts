import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntitySpawnReason } from '../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
export interface EntityLoadDataSetter extends Object{
    fabric_setLoadedFromDisk(arg0: boolean): void;
    fabric_setSpawnReason(arg0: EntitySpawnReason): void;
}