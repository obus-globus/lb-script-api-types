import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockStateModel } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface AltModelBlockRenderer extends Object{
    tesselateBlock(arg0: QuadEmitter, arg1: number, arg2: number, arg3: number, arg4: BlockAndTintGetter, arg5: BlockPos, arg6: BlockState, arg7: BlockStateModel, arg8: number): void;
}