import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { MultifaceSpreader$DefaultSpreaderConfig } from '../../../../../net/minecraft/world/level/block/MultifaceSpreader$DefaultSpreaderConfig.d.ts'
import type { MultifaceSpreader$SpreadType } from '../../../../../net/minecraft/world/level/block/MultifaceSpreader$SpreadType.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class SculkVeinBlock$SculkVeinSpreaderConfig extends MultifaceSpreader$DefaultSpreaderConfig {
    constructor(null_: SculkVeinBlock$SculkVeinSpreaderConfig, spreadTypes: MultifaceSpreader$SpreadType[])
    readonly spreadTypes: MultifaceSpreader$SpreadType[];
    getSpreadTypes(): MultifaceSpreader$SpreadType[];
    isOtherBlockValidAsSource(state: BlockState): boolean;
    stateCanBeReplaced(level: BlockGetter, sourcePos: BlockPos, placementPos: BlockPos, placementDirection: Direction, existingState: BlockState): boolean;
}