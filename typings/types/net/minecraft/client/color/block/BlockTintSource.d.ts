import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockAndTintGetter } from '../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export interface BlockTintSource extends Object{
    color(state: BlockState): number;
    colorAsTerrainParticle(state: BlockState, level: BlockAndTintGetter, pos: BlockPos): number;
    colorInWorld(state: BlockState, level: BlockAndTintGetter, pos: BlockPos): number;
    relevantProperties(): Property<Object>[];
}