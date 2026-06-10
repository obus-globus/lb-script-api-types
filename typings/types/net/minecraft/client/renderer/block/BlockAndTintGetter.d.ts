import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockAndLightGetter } from '../../../../../net/minecraft/world/level/BlockAndLightGetter.d.ts'
import type { CardinalLighting } from '../../../../../net/minecraft/world/level/CardinalLighting.d.ts'
import type { ColorResolver } from '../../../../../net/minecraft/world/level/ColorResolver.d.ts'
import type { LightLayer } from '../../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export interface BlockAndTintGetter extends Object, BlockAndLightGetter {
    canSeeSky(pos: BlockPos): boolean;
    cardinalLighting(): CardinalLighting;
    getBlockTint(pos: BlockPos, color: (param0: Biome, param1: number, param2: number) => number): number;
    getBrightness(layer: LightLayer, pos: BlockPos): number;
    getRawBrightness(pos: BlockPos, darkening: number): number;
}