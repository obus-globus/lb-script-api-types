import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { LightMode } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightMode.d.ts'
import type { LightPipelineProvider } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightPipelineProvider.d.ts'
import type { QuadLightData } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/QuadLightData.d.ts'
import type { ShapeComparisonCache } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline/ShapeComparisonCache.d.ts'
import type { AbstractBlockRenderContext$BlockEmitter } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/AbstractBlockRenderContext$BlockEmitter.d.ts'
import type { AbstractRenderContext } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/AbstractRenderContext.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/MutableQuadViewImpl.d.ts'
import type { SodiumShadeMode } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/SodiumShadeMode.d.ts'
import type { LevelSlice } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockStateModelPart } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export abstract class AbstractBlockRenderContext extends AbstractRenderContext {
    constructor()
    // private cachedPositionObject: BlockPos$MutableBlockPos;
    // private cullCompletionFlags: number;
    // private cullResultFlags: number;
    // private defaultLightMode: LightMode;
    // private editorQuad: AbstractBlockRenderContext$BlockEmitter;
    // private enableCulling: boolean;
    // private forceOpaque: boolean;
    // private level: BlockAndTintGetter;
    // private lighters: LightPipelineProvider;
    // private occlusionCache: () => ShapeComparisonCache;
    // private parts: BlockStateModelPart[];
    // private pos: BlockPos;
    // private quadLightData: QuadLightData;
    // private random: RandomSource;
    // private slice: LevelSlice;
    // private state: BlockState;
    // private useAmbientOcclusion: boolean;
    bufferDefaultModel(arg0: BlockStateModelPart, arg1: (param0: Direction) => boolean, arg2: (param0: MutableQuadViewImpl) => void): void;
    getForEmitting(): MutableQuadViewImpl;
    isFaceCulled(arg0: Direction): boolean;
    prepareAoInfo(arg0: boolean): void;
    prepareCulling(arg0: boolean): void;
    processQuad(arg0: MutableQuadViewImpl): void;
    renderQuad(arg0: MutableQuadViewImpl): void;
    shadeQuad(arg0: MutableQuadViewImpl, arg1: LightMode, arg2: boolean, arg3: SodiumShadeMode): void;
    shouldDrawSide(arg0: Direction): boolean;
}