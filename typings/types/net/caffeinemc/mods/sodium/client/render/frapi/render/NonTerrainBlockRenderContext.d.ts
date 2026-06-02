import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ColorProvider } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProvider.d.ts'
import type { LightMode } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightMode.d.ts'
import type { SingleBlockLightDataCache } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/SingleBlockLightDataCache.d.ts'
import type { AbstractBlockRenderContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/model/AbstractBlockRenderContext.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/model/MutableQuadViewImpl.d.ts'
import type { SodiumShadeMode } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/model/SodiumShadeMode.d.ts'
import type { MutableQuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableQuadView.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { QuadTransform } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadTransform.d.ts'
import type { AltModelBlockRenderer } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/render/AltModelBlockRenderer.d.ts'
import type { BlockColors } from '../../../../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { BlockTintSource } from '../../../../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockStateModel } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vector3f } from '../../../../../../../../org/joml/Vector3f.d.ts'
export class NonTerrainBlockRenderContext extends AbstractBlockRenderContext implements QuadTransform, AltModelBlockRenderer {
    constructor(arg0: boolean, arg1: boolean, arg2: BlockColors)
    // private allowAO: boolean;
    // private colorMap: BlockColors;
    // private colorProvider: ColorProvider<BlockState>;
    // private computedTintValues: (Object | null)[];
    // private defaultAo: boolean;
    // private lightDataCache: SingleBlockLightDataCache;
    // private offset: Vector3f;
    // private output: QuadEmitter;
    // private scratchPos: BlockPos$MutableBlockPos;
    // private tintCacheIndex: number;
    // private tintCacheValue: number;
    // private tintSources: BlockTintSource[];
    // private tintSourcesInitialized: boolean;
    // private vertexColors: number[];
    // private computeTintColor(arg0: BlockAndTintGetter, arg1: BlockState, arg2: BlockPos, arg3: number): number;
    // private configureTintCache(arg0: BlockState, arg1: BlockAndTintGetter, arg2: BlockPos): void;
    // private getTintColor(arg0: BlockAndTintGetter, arg1: BlockState, arg2: BlockPos, arg3: number): number;
    processQuad(arg0: MutableQuadViewImpl): void;
    // private resetTintCache(): void;
    shadeQuad(arg0: MutableQuadViewImpl, arg1: LightMode, arg2: boolean, arg3: SodiumShadeMode): void;
    tesselateBlock(arg0: QuadEmitter, arg1: number, arg2: number, arg3: number, arg4: BlockAndTintGetter, arg5: BlockPos, arg6: BlockState, arg7: BlockStateModel, arg8: number): void;
    // private tintQuad(arg0: MutableQuadViewImpl): void;
    transform(arg0: MutableQuadView): boolean;
}