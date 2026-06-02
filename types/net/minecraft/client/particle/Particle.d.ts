import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ParticleRenderType } from '../../../../net/minecraft/client/particle/ParticleRenderType.d.ts'
import type { ParticleLimit } from '../../../../net/minecraft/core/particles/ParticleLimit.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export abstract class Particle extends Object {
    constructor(level: ClientLevel, x: number, y: number, z: number)
    constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number)
    // private age: number;
    // private bb: AABB;
    // private bbHeight: number;
    // private bbWidth: number;
    // private friction: number;
    // private gravity: number;
    // private hasPhysics: boolean;
    // private level: ClientLevel;
    lifetime: number;
    // private onGround: boolean;
    // private random: RandomSource;
    // private removed: boolean;
    // private speedUpWhenYMotionIsBlocked: boolean;
    // private stoppedByCollision: boolean;
    // private x: number;
    // private xd: number;
    // private xo: number;
    // private y: number;
    // private yd: number;
    // private yo: number;
    // private z: number;
    // private zd: number;
    // private zo: number;
    getBoundingBox(): AABB;
    getGroup(): ParticleRenderType;
    getLifetime(): number;
    getLightCoords(a: number): number;
    getParticleLimit(): Optional<ParticleLimit>;
    isAlive(): boolean;
    move(xa: number, ya: number, za: number): void;
    remove(): void;
    scale(scale: number): Particle;
    setBoundingBox(bb: AABB): void;
    setLifetime(lifetime: number): void;
    setLocationFromBoundingbox(): void;
    setParticleSpeed(xd: number, yd: number, zd: number): void;
    setPos(x: number, y: number, z: number): void;
    setPower(power: number): Particle;
    setSize(w: number, h: number): void;
    tick(): void;
    toString(): string;
}