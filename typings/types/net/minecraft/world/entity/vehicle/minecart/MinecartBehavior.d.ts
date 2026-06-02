import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { InterpolationHandler } from '../../../../../../net/minecraft/world/entity/InterpolationHandler.d.ts'
import type { AbstractMinecart } from '../../../../../../net/minecraft/world/entity/vehicle/minecart/AbstractMinecart.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { RailShape } from '../../../../../../net/minecraft/world/level/block/state/properties/RailShape.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export abstract class MinecartBehavior extends Object {
    constructor(minecart: AbstractMinecart)
    // private minecart: AbstractMinecart;
    getDeltaMovement(): Vec3;
    getInterpolation(): InterpolationHandler;
    getKnownMovement(knownMovement: Vec3): Vec3;
    getMaxSpeed(level: ServerLevel): number;
    getMotionDirection(): Direction;
    getSlowdownFactor(): number;
    getX(): number;
    getXRot(): number;
    getY(): number;
    getYRot(): number;
    getZ(): number;
    lerpMotion(movement: Vec3): void;
    level(): Level;
    moveAlongTrack(level: ServerLevel): void;
    position(): Vec3;
    pushAndPickupEntities(): boolean;
    setDeltaMovement(x: number, y: number, z: number): void;
    setDeltaMovement(deltaMovement: Vec3): void;
    setPos(x: number, y: number, z: number): void;
    setPos(pos: Vec3): void;
    setXRot(rot: number): void;
    setYRot(rot: number): void;
    stepAlongTrack(pos: BlockPos, shape: RailShape, movementLeft: number): number;
    tick(): void;
}