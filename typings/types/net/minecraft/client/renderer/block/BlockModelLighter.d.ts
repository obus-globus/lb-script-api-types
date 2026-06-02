import type { QuadInstance } from '../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockAndTintGetter } from '../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockModelLighter$Cache } from '../../../../../net/minecraft/client/renderer/block/BlockModelLighter$Cache.d.ts'
import type { BakedQuad } from '../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockModelLighter extends Object {
    static CHECK_LIGHT: number;
    static clearCache(): void;
    static enableCaching(): void;
    constructor()
    // private cache: BlockModelLighter$Cache;
    // private faceCubic: boolean;
    // private facePartial: boolean;
    // private faceShape: number[];
    // private scratchPos: BlockPos$MutableBlockPos;
    getLightCoords(state: BlockState, level: BlockAndTintGetter, relativePos: BlockPos): number;
    prepareQuadAmbientOcclusion(level: BlockAndTintGetter, state: BlockState, centerPosition: BlockPos, quad: BakedQuad, outputInstance: QuadInstance): void;
    prepareQuadFlat(level: BlockAndTintGetter, state: BlockState, pos: BlockPos, lightCoords: number, quad: BakedQuad, outputInstance: QuadInstance): void;
    // private prepareQuadShape(level: BlockAndTintGetter, state: BlockState, pos: BlockPos, quad: BakedQuad, ambientOcclusion: boolean): void;
}