import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ParticleRenderEvents$AllowTerrainParticleTint } from '../../../../../../../net/fabricmc/fabric/api/client/particle/v1/ParticleRenderEvents$AllowTerrainParticleTint.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ParticleRenderEvents extends Object {
    static ALLOW_TERRAIN_PARTICLE_TINT: Event<(param0: BlockState, param1: ClientLevel, param2: BlockPos) => kotlin.Boolean>;
    private constructor()
}