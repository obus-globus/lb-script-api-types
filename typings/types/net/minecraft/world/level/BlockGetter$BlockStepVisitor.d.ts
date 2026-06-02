import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
export interface BlockGetter$BlockStepVisitor extends Object{
    visit(pos: BlockPos, iteration: number): boolean;
}