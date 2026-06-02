import type { Supplier } from '../../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ColorProvider } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProvider.d.ts'
import type { LightPipeline } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightPipeline.d.ts'
import type { LightPipelineProvider } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightPipelineProvider.d.ts'
import type { QuadLightData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/QuadLightData.d.ts'
import type { ModelQuadView } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { ModelQuadViewMutable } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadViewMutable.d.ts'
import type { ModelQuadFacing } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/properties/ModelQuadFacing.d.ts'
import type { ChunkModelBuilder } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/buffers/ChunkModelBuilder.d.ts'
import type { ShapeComparisonCache } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline/ShapeComparisonCache.d.ts'
import type { Material } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/material/Material.d.ts'
import type { TranslucentGeometryCollector } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/TranslucentGeometryCollector.d.ts'
import type { ChunkVertexEncoder$Vertex } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder$Vertex.d.ts'
import type { LevelSlice } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { VertexEncoderInterface } from '../../../../../../../../../net/irisshaders/iris/vertices/sodium/terrain/VertexEncoderInterface.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { FluidModel } from '../../../../../../../../../net/minecraft/client/renderer/block/FluidModel.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockGetter } from '../../../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { VoxelShape } from '../../../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class DefaultFluidRenderer extends Object implements VertexEncoderInterface {
    static EPSILON: number;
    constructor(arg0: LightPipelineProvider)
    // private blockId: number;
    // private brightness: number[];
    // private flatLighter: LightPipeline;
    // private hiddenFluidCulling: boolean;
    // private improvedFluidShaping: boolean;
    // private isFluid: number;
    // private lastBlockId: number;
    // private lightEmission: number;
    // private localX: number;
    // private localY: number;
    // private localZ: number;
    // private occlusionCache: () => ShapeComparisonCache;
    // private quad: ModelQuadViewMutable;
    // private quadColors: number[];
    // private quadLightData: QuadLightData;
    // private scratchHeight: number;
    // private scratchPos: BlockPos$MutableBlockPos;
    // private scratchSamples: number;
    // private secondScratchPos: BlockPos$MutableBlockPos;
    // private smoothLighter: LightPipeline;
    // private stack: (Object | null)[];
    // private vertices: ChunkVertexEncoder$Vertex[];
    // private visited: number;
    // private addHeightSample(arg0: number): void;
    beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    // private fluidCornerHeight(arg0: BlockAndTintGetter, arg1: BlockPos, arg2: Fluid, arg3: number, arg4: Direction, arg5: Direction, arg6: number, arg7: number, arg8: boolean, arg9: boolean): number;
    // private getUpFaceExposureByNeighbors(arg0: BlockAndTintGetter, arg1: BlockPos, arg2: FluidState): number;
    // private isFluidSelfVisible(arg0: BlockState, arg1: Direction, arg2: VoxelShape): boolean;
    // private isFluidSideExposed(arg0: BlockAndTintGetter, arg1: BlockState, arg2: BlockPos, arg3: Direction, arg4: number): boolean;
    // private isFluidSideExposed(arg0: BlockState, arg1: BlockState, arg2: Direction, arg3: number): boolean;
    // private isFullBlockFluidSelfVisible(arg0: BlockState, arg1: Direction): boolean;
    // private isFullBlockFluidSideVisible(arg0: BlockGetter, arg1: BlockPos, arg2: Direction, arg3: FluidState): boolean;
    // private isFullBlockFluidVisible(arg0: BlockAndTintGetter, arg1: BlockPos, arg2: Direction, arg3: BlockState, arg4: FluidState): boolean;
    // private isSideExposedOffset(arg0: BlockAndTintGetter, arg1: BlockState, arg2: BlockPos, arg3: Direction, arg4: number): boolean;
    // private offsetToMask(arg0: number, arg1: number): number;
    overrideBlock(arg0: number): void;
    render(arg0: LevelSlice, arg1: BlockState, arg2: FluidState, arg3: BlockPos, arg4: BlockPos, arg5: TranslucentGeometryCollector, arg6: ChunkModelBuilder, arg7: Material, arg8: ColorProvider<FluidState>, arg9: FluidModel): void;
    restoreBlock(): void;
    // private sampleFluidCornerBasic(arg0: BlockAndTintGetter, arg1: BlockPos, arg2: Fluid, arg3: Direction, arg4: Direction, arg5: number, arg6: number): number;
    // private sampleFluidCornerSmart(arg0: BlockAndTintGetter, arg1: BlockPos, arg2: Fluid, arg3: Direction, arg4: Direction, arg5: number, arg6: number, arg7: boolean, arg8: boolean, arg9: number, arg10: number): number;
    // private sampleFluidHeight(arg0: BlockAndTintGetter, arg1: Fluid, arg2: BlockPos): number;
    // private sampleFluidHeight(arg0: BlockAndTintGetter, arg1: Fluid, arg2: BlockPos, arg3: Direction): number;
    // private updateQuad(arg0: ModelQuadViewMutable, arg1: LevelSlice, arg2: BlockPos, arg3: LightPipeline, arg4: Direction, arg5: ModelQuadFacing, arg6: number, arg7: ColorProvider<FluidState>, arg8: FluidState): void;
    // private visitExposureNeighbor(arg0: BlockAndTintGetter, arg1: BlockPos, arg2: FluidState, arg3: number, arg4: number): number;
    // private writeQuad(arg0: ChunkModelBuilder, arg1: TranslucentGeometryCollector, arg2: Material, arg3: BlockPos, arg4: ModelQuadView, arg5: ModelQuadFacing, arg6: boolean): void;
}