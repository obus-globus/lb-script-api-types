import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ClipContext$ShapeGetter } from '../../../../net/minecraft/world/level/ClipContext$ShapeGetter.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { CollisionContext } from '../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class ClipContext$Block extends Enum<ClipContext$Block> implements ClipContext$ShapeGetter {
    static COLLIDER: ClipContext$Block;
    static FALLDAMAGE_RESETTING: ClipContext$Block;
    static OUTLINE: ClipContext$Block;
    static VISUAL: ClipContext$Block;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ClipContext$Block;
    static values(): ClipContext$Block[];
    private constructor(getShape: ClipContext$ShapeGetter)
    // private shapeGetter: ClipContext$ShapeGetter;
    get(state: BlockState, level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    name(): "COLLIDER" | "OUTLINE" | "VISUAL" | "FALLDAMAGE_RESETTING";
}