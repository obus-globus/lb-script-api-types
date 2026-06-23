import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Pose } from '../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { CollisionGetter } from '../../../../../net/minecraft/world/level/CollisionGetter.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class DismountHelper extends Object {
    static canDismountTo(paramlevel: CollisionGetter, parampassenger: LivingEntity, parambox: AABB): boolean;
    static canDismountTo(paramlevel: CollisionGetter, paramlocation: Vec3, parampassenger: LivingEntity, paramdismountPose: Pose): boolean;
    static findCeilingFrom(parampos: BlockPos, paramblocks: number, paramshapeGetter: (param0: BlockPos) => VoxelShape): number;
    static findSafeDismountLocation(paramtype: EntityType<any>, paramlevel: CollisionGetter, paramblockPos: BlockPos, paramcheckDangerous: boolean): Vec3;
    static isBlockFloorValid(paramblockFloorHeight: number): boolean;
    static nonClimbableShape(paramlevel: BlockGetter, parampos: BlockPos): VoxelShape;
    static offsetsForDirection(paramforward: Direction): (Object | null)[];
    constructor()
}