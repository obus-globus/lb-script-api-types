import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BooleanOp } from '../../../../../../net/minecraft/world/phys/shapes/BooleanOp.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { CallbackInfoReturnable } from '../../../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.d.ts'
export class VoxelShapeMatchesAnywhere extends Object {
    static cuboidMatchesAnywhere(paramarg0: VoxelShape, paramarg1: VoxelShape, paramarg2: BooleanOp, paramarg3: CallbackInfoReturnable<boolean>): void;
    constructor()
}