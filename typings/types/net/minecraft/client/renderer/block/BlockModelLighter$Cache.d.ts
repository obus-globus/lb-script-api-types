import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockAndTintGetter } from '../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LightCoordsUtil$BrightnessGetter } from '../../../../../net/minecraft/util/LightCoordsUtil$BrightnessGetter.d.ts'
import type { BlockAndLightGetter } from '../../../../../net/minecraft/world/level/BlockAndLightGetter.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockModelLighter$Cache extends Object {
    constructor()
    // private brightnessCache: { [key: string]: any };
    // private cachedBrightnessGetter: (param0: BlockAndLightGetter, param1: BlockPos) => number;
    // private colorCache: { [key: string]: any };
    // private enabled: boolean;
    disable(): void;
    enable(): void;
    getLightCoords(state: BlockState, level: BlockAndTintGetter, pos: BlockPos): number;
    getShadeBrightness(state: BlockState, level: BlockAndTintGetter, pos: BlockPos): number;
}