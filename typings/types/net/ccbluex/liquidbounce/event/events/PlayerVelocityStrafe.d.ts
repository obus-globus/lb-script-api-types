import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Fires during strafe velocity calculation, exposing the movement input, speed, yaw and the resulting velocity.
 */
export class PlayerVelocityStrafe extends Event {
    constructor(movementInput: Vec3, speed: number, yaw: number, velocity: Vec3)
    readonly movementInput: Vec3;
    readonly speed: number;
    velocity: Vec3;
    readonly yaw: number;
}