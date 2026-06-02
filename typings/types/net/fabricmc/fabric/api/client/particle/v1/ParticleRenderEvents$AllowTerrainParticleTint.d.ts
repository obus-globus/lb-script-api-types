import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface ParticleRenderEvents$AllowTerrainParticleTint extends Object{
    allowTerrainParticleTint(arg0: BlockState, arg1: ClientLevel, arg2: BlockPos): boolean;
}