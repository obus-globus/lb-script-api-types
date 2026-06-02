import type { QuadInstance } from '../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockColors } from '../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { BlockTintSource } from '../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { BlockAndTintGetter } from '../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockModelLighter } from '../../../../../net/minecraft/client/renderer/block/BlockModelLighter.d.ts'
import type { BlockQuadOutput } from '../../../../../net/minecraft/client/renderer/block/BlockQuadOutput.d.ts'
import type { BlockStateModel } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModelPart } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { BakedQuad } from '../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModelBlockRenderer extends Object {
    static forceOpaque(paramcutoutLeaves: boolean, paramblockState: BlockState): boolean;
    constructor(ambientOcclusion: boolean, cull: boolean, blockColors: BlockColors)
    // private ambientOcclusion: boolean;
    // private blockColors: BlockColors;
    // private computedTintValues: (Object | null)[];
    // private cull: boolean;
    // private lighter: BlockModelLighter;
    // private parts: BlockStateModelPart[];
    // private quadInstance: QuadInstance;
    // private random: RandomSource;
    // private scratchPos: BlockPos$MutableBlockPos;
    // private tintCacheIndex: number;
    // private tintCacheValue: number;
    // private tintSources: BlockTintSource[];
    // private tintSourcesInitialized: boolean;
    // private computeTintColor(level: BlockAndTintGetter, state: BlockState, pos: BlockPos, tintIndex: number): number;
    // private configureTintCache(blockState: BlockState): void;
    // private getTintColor(level: BlockAndTintGetter, state: BlockState, pos: BlockPos, tintIndex: number): number;
    // private putQuadWithTint(output: (param0: number, param1: number, param2: number, param3: BakedQuad, param4: QuadInstance) => void, x: number, y: number, z: number, level: BlockAndTintGetter, state: BlockState, pos: BlockPos, quad: BakedQuad): void;
    // private resetTintCache(): void;
    // private shouldRenderFace(level: BlockAndTintGetter, state: BlockState, direction: Direction, neighborPos: BlockPos): boolean;
    // private tesselateAmbientOcclusion(output: (param0: number, param1: number, param2: number, param3: BakedQuad, param4: QuadInstance) => void, x: number, y: number, z: number, parts: BlockStateModelPart[], level: BlockAndTintGetter, state: BlockState, pos: BlockPos): void;
    tesselateBlock(output: (param0: number, param1: number, param2: number, param3: BakedQuad, param4: QuadInstance) => void, x: number, y: number, z: number, level: BlockAndTintGetter, pos: BlockPos, blockState: BlockState, model: BlockStateModel, seed: number): void;
    // private tesselateFlat(output: (param0: number, param1: number, param2: number, param3: BakedQuad, param4: QuadInstance) => void, x: number, y: number, z: number, parts: BlockStateModelPart[], level: BlockAndTintGetter, state: BlockState, pos: BlockPos): void;
}