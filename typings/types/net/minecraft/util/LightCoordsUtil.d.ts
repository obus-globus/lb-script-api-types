import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { LightCoordsUtil$BrightnessGetter } from '../../../net/minecraft/util/LightCoordsUtil$BrightnessGetter.d.ts'
import type { BlockAndLightGetter } from '../../../net/minecraft/world/level/BlockAndLightGetter.d.ts'
import type { BlockState } from '../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class LightCoordsUtil extends Object {
    static FULL_BRIGHT: number;
    static FULL_SKY: number;
    static addSmoothBlockEmission(paramlightCoords: number, paramblockLightEmission: number): number;
    static block(parampacked: number): number;
    static getLightCoords(parambrightnessGetter: (param0: BlockAndLightGetter, param1: BlockPos) => number, paramlevel: BlockAndLightGetter, paramstate: BlockState, parampos: BlockPos): number;
    static getLightCoords(paramlevel: BlockAndLightGetter, parampos: BlockPos): number;
    static lightCoordsWithEmission(paramlightCoords: number, paramemission: number): number;
    static max(paramcoords1: number, paramcoords2: number): number;
    static pack(paramblock: number, paramsky: number): number;
    static sky(parampacked: number): number;
    static smoothBlend(paramneighbor1: number, paramneighbor2: number, paramneighbor3: number, paramcenter: number): number;
    static smoothBlock(parampacked: number): number;
    static smoothPack(paramblock: number, paramsky: number): number;
    static smoothSky(parampacked: number): number;
    static smoothWeightedBlend(paramcoords1: number, paramcoords2: number, paramcoords3: number, paramcoords4: number, paramweight1: number, paramweight2: number, paramweight3: number, paramweight4: number): number;
    static withBlock(paramcoords: number, paramblock: number): number;
    constructor()
}