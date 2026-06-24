import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { NoRenderParticle } from '../../../../net/minecraft/client/particle/NoRenderParticle.d.ts'
export class NoxiousGasCloudParticle extends NoRenderParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number)
    tick(): void;
}