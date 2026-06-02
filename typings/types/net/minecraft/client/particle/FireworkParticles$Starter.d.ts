import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { NoRenderParticle } from '../../../../net/minecraft/client/particle/NoRenderParticle.d.ts'
import type { ParticleEngine } from '../../../../net/minecraft/client/particle/ParticleEngine.d.ts'
import type { FireworkExplosion } from '../../../../net/minecraft/world/item/component/FireworkExplosion.d.ts'
export class FireworkParticles$Starter extends NoRenderParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, xd: number, yd: number, zd: number, engine: ParticleEngine, explosions: FireworkExplosion[])
    // private engine: ParticleEngine;
    // private explosions: FireworkExplosion[];
    // private life: number;
    // private twinkleDelay: boolean;
    // private createParticle(x: number, y: number, z: number, xa: number, ya: number, za: number, rgbColors: (Object | null)[], fadeColors: (Object | null)[], trail: boolean, twinkle: boolean): void;
    // private createParticleBall(baseSpeed: number, steps: number, rgbColors: (Object | null)[], fadeColors: (Object | null)[], trail: boolean, twinkle: boolean): void;
    // private createParticleBurst(rgbColors: (Object | null)[], fadeColors: (Object | null)[], trail: boolean, twinkle: boolean): void;
    // private createParticleShape(baseSpeed: number, coords: number[][], rgbColors: (Object | null)[], fadeColors: (Object | null)[], trail: boolean, twinkle: boolean, flat: boolean): void;
    // private isFarAwayFromCamera(): boolean;
    tick(): void;
}