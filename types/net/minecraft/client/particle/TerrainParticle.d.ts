import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class TerrainParticle extends SingleQuadParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, blockState: BlockState)
    constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, blockState: BlockState, pos: BlockPos)
    readonly layer: SingleQuadParticle$Layer;
    // private pos: BlockPos;
    // private uo: number;
    // private vo: number;
    getLayer(): SingleQuadParticle$Layer;
    getU0(): number;
    getU1(): number;
    getV0(): number;
    getV1(): number;
}