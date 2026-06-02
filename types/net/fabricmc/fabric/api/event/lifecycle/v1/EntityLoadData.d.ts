import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntitySpawnReason } from '../../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
export interface EntityLoadData extends Object{
    isLoadedFromDisk(): boolean;
    spawnReason(): EntitySpawnReason;
}