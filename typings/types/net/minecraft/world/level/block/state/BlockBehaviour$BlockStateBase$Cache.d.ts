import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { SupportType } from '../../../../../../net/minecraft/world/level/block/SupportType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class BlockBehaviour$BlockStateBase$Cache extends Object {
    private constructor(state: BlockState)
    collisionShape: VoxelShape;
    // private faceSturdy: boolean[];
    isCollisionShapeFullBlock: boolean;
    largeCollisionShape: boolean;
    isFaceSturdy(direction: Direction, supportType: SupportType): boolean;
}