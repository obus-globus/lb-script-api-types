import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { HitResult } from '../../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SimulatedArrow extends Object {
    constructor(level: Level, pos: Vec3, velocity: Vec3, collideEntities: boolean)
    // private collideEntities: boolean;
    inGround: boolean;
    readonly level: Level;
    pos: Vec3;
    velocity: Vec3;
    // private isTouchingWater(): boolean;
    tick(): HitResult | null;
    // private updateCollision(pos: Vec3, newPos: Vec3): HitResult | null;
}