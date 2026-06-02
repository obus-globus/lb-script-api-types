import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { MultifaceSpreader$SpreadPos } from '../../../../../net/minecraft/world/level/block/MultifaceSpreader$SpreadPos.d.ts'
export interface MultifaceSpreader$SpreadPredicate extends Object{
    test(level: BlockGetter, sourcePos: BlockPos, spreadPos: MultifaceSpreader$SpreadPos): boolean;
}