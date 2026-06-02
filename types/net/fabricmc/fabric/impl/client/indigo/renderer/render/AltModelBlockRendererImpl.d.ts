import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MutableQuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableQuadView.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { QuadTransform } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadTransform.d.ts'
import type { AltModelBlockRenderer } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/render/AltModelBlockRenderer.d.ts'
import type { AoCalculator } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/aocalc/AoCalculator.d.ts'
import type { FlatLighter } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/aocalc/FlatLighter.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/mesh/MutableQuadViewImpl.d.ts'
import type { BlockColors } from '../../../../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { BlockTintSource } from '../../../../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockStateModel } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vector3f } from '../../../../../../../../org/joml/Vector3f.d.ts'
export class AltModelBlockRendererImpl extends Object implements QuadTransform, AltModelBlockRenderer {
    constructor(arg0: boolean, arg1: boolean, arg2: BlockColors)
    // private ambientOcclusion: boolean;
    // private aoCalc: AoCalculator;
    // private blockColors: BlockColors;
    // private blockState: BlockState;
    // private cacheValid: number;
    // private computedTintValues: (Object | null)[];
    // private cull: boolean;
    // private cullTest: (param0: Direction) => kotlin.Boolean;
    // private defaultAo: boolean;
    // private flatLighter: FlatLighter;
    // private level: BlockAndTintGetter;
    // private offset: Vector3f;
    // private pos: BlockPos;
    // private random: RandomSource;
    // private scratchPos: BlockPos$MutableBlockPos;
    // private shouldCullFaceCache: number;
    // private tintCacheIndex: number;
    // private tintCacheValue: number;
    // private tintSources: BlockTintSource[];
    // private tintSourcesInitialized: boolean;
    // private computeTintColor(arg0: BlockAndTintGetter, arg1: BlockState, arg2: BlockPos, arg3: number): number;
    // private configureTintCache(arg0: BlockState, arg1: BlockAndTintGetter, arg2: BlockPos): void;
    // private getTintColor(arg0: BlockAndTintGetter, arg1: BlockState, arg2: BlockPos, arg3: number): number;
    // private resetTintCache(): void;
    // private shadeQuad(arg0: MutableQuadViewImpl, arg1: boolean, arg2: boolean, arg3: boolean): void;
    // private shouldCullFace(arg0: Direction): boolean;
    tesselateBlock(arg0: QuadEmitter, arg1: number, arg2: number, arg3: number, arg4: BlockAndTintGetter, arg5: BlockPos, arg6: BlockState, arg7: BlockStateModel, arg8: number): void;
    // private tintQuad(arg0: MutableQuadView): void;
    transform(arg0: MutableQuadView): boolean;
}