import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockAndLightGetter } from '../../../net/minecraft/world/level/BlockAndLightGetter.d.ts'
export interface LightCoordsUtil$BrightnessGetter extends Object{
    packedBrightness(level: BlockAndLightGetter, pos: BlockPos): number;
}