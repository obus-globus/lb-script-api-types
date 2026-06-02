import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { InterpolationHandler } from '../../../../../../net/minecraft/world/entity/InterpolationHandler.d.ts'
import type { AbstractMinecart } from '../../../../../../net/minecraft/world/entity/vehicle/minecart/AbstractMinecart.d.ts'
import type { MinecartBehavior } from '../../../../../../net/minecraft/world/entity/vehicle/minecart/MinecartBehavior.d.ts'
import type { RailShape } from '../../../../../../net/minecraft/world/level/block/state/properties/RailShape.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class OldMinecartBehavior extends MinecartBehavior {
    constructor(minecart: AbstractMinecart)
    // private beforeMoveOnRailNotificationMask: number;
    // private beforeMoveOnRailPos: Vec3;
    readonly interpolation: InterpolationHandler;
    // private targetDeltaMovement: Vec3;
    getInterpolation(): InterpolationHandler;
    getKnownMovement(knownMovement: Vec3): Vec3;
    getMaxSpeed(level: ServerLevel): number;
    getMotionDirection(): Direction;
    getPos(x: number, y: number, z: number): Vec3;
    getPosOffs(x: number, y: number, z: number, offs: number): Vec3;
    getSlowdownFactor(): number;
    lerpMotion(movement: Vec3): void;
    moveAlongTrack(level: ServerLevel): void;
    onInterpolation(interpolation: InterpolationHandler): void;
    pushAndPickupEntities(): boolean;
    stepAlongTrack(pos: BlockPos, shape: RailShape, movementLeft: number): number;
    tick(): void;
}