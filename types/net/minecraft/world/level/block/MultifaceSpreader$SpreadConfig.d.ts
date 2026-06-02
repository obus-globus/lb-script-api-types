import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { MultifaceSpreader$SpreadPos } from '../../../../../net/minecraft/world/level/block/MultifaceSpreader$SpreadPos.d.ts'
import type { MultifaceSpreader$SpreadType } from '../../../../../net/minecraft/world/level/block/MultifaceSpreader$SpreadType.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface MultifaceSpreader$SpreadConfig extends Object{
    canSpreadFrom(state: BlockState, face: Direction): boolean;
    canSpreadInto(level: BlockGetter, sourcePos: BlockPos, spreadPos: MultifaceSpreader$SpreadPos): boolean;
    getSpreadTypes(): MultifaceSpreader$SpreadType[];
    getStateForPlacement(oldState: BlockState, level: BlockGetter, placementPos: BlockPos, placementDirection: Direction): BlockState;
    hasFace(state: BlockState, face: Direction): boolean;
    isOtherBlockValidAsSource(state: BlockState): boolean;
    placeBlock(level: LevelAccessor, spreadPos: MultifaceSpreader$SpreadPos, oldState: BlockState, postProcess: boolean): boolean;
}