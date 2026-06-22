import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockAndLightGetter } from '../../../../../net/minecraft/world/level/BlockAndLightGetter.d.ts'
import type { CardinalLighting } from '../../../../../net/minecraft/world/level/CardinalLighting.d.ts'
import type { ColorResolver } from '../../../../../net/minecraft/world/level/ColorResolver.d.ts'
import type { LightLayer } from '../../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelLightEngine } from '../../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export interface BlockAndTintGetter extends Object, BlockAndLightGetter {
    canSeeSky(pos: BlockPos): boolean;
    cardinalLighting(): CardinalLighting;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockState(pos: BlockPos): BlockState;
    getBlockTint(pos: BlockPos, color: (param0: Biome, param1: number, param2: number) => number): number;
    getBrightness(layer: LightLayer, pos: BlockPos): number;
    getFluidState(pos: BlockPos): FluidState;
    getHeight(): number;
    getLightEngine(): LevelLightEngine;
    getMinY(): number;
    getRawBrightness(pos: BlockPos, darkening: number): number;
}