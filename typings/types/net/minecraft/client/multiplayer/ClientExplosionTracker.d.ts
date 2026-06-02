import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientExplosionTracker$ExplosionInfo } from '../../../../net/minecraft/client/multiplayer/ClientExplosionTracker$ExplosionInfo.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ExplosionParticleInfo } from '../../../../net/minecraft/core/particles/ExplosionParticleInfo.d.ts'
import type { WeightedList } from '../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ClientExplosionTracker extends Object {
    constructor()
    // private explosions: ClientExplosionTracker$ExplosionInfo[];
    // private addParticle(level: ClientLevel, explosion: ClientExplosionTracker$ExplosionInfo): void;
    tick(level: ClientLevel): void;
    track(center: Vec3, radius: number, blockCount: number, blockParticles: WeightedList<ExplosionParticleInfo>): void;
}