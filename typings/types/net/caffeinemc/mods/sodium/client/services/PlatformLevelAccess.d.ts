import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SodiumAuxiliaryLightManager } from '../../../../../../net/caffeinemc/mods/sodium/client/world/SodiumAuxiliaryLightManager.d.ts'
import type { SectionPos } from '../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { LevelChunk } from '../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export interface PlatformLevelAccess extends Object{
    getBlockEntityData(arg0: BlockEntity): Object;
    getLightManager(arg0: LevelChunk, arg1: SectionPos): SodiumAuxiliaryLightManager;
}