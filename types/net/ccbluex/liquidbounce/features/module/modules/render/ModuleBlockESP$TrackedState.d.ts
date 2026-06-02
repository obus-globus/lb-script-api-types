import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { VoxelShape } from '../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class ModuleBlockESP$TrackedState extends Object {
    constructor(state: BlockState, shape: VoxelShape)
    shape: VoxelShape;
    state: BlockState;
}