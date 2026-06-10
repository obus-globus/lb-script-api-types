import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../net/minecraft/core/Direction$Axis.d.ts'
import type { BlockUtil$FoundRectangle } from '../../../net/minecraft/util/BlockUtil$FoundRectangle.d.ts'
import type { BlockGetter } from '../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Block } from '../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockUtil extends Object {
    static getLargestRectangleAround(paramcenter: BlockPos, paramaxis1: Direction$Axis, paramlimit1: number, paramaxis2: Direction$Axis, paramlimit2: number, paramtest: (param0: BlockPos) => boolean): BlockUtil$FoundRectangle;
    static getTopConnectedBlock(paramlevel: BlockGetter, parampos: BlockPos, parambodyBlock: Block, paramgrowthDirection: Direction, paramheadBlock: Block): Optional<BlockPos>;
    constructor()
}