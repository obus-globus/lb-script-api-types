import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockMarker extends SingleQuadParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, state: BlockState)
    readonly layer: SingleQuadParticle$Layer;
    getLayer(): SingleQuadParticle$Layer;
    getQuadSize(a: number): number;
}