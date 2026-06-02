import type { ColorProvider } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProvider.d.ts'
import type { ColorProviderRegistry } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProviderRegistry.d.ts'
import type { LightPipelineProvider } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightPipelineProvider.d.ts'
import type { ChunkBuildBuffers } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildBuffers.d.ts'
import type { Material } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/material/Material.d.ts'
import type { TranslucentGeometryCollector } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/TranslucentGeometryCollector.d.ts'
import type { ChunkVertexEncoder$Vertex } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder$Vertex.d.ts'
import type { AbstractBlockRenderContext } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/model/AbstractBlockRenderContext.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/model/MutableQuadViewImpl.d.ts'
import type { LevelSlice } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { BlockRendererAccessor } from '../../../../../../../../../net/irisshaders/iris/compat/sodium/mixin/BlockRendererAccessor.d.ts'
import type { VertexEncoderInterface } from '../../../../../../../../../net/irisshaders/iris/vertices/sodium/terrain/VertexEncoderInterface.d.ts'
import type { BlockStateModel } from '../../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vector3f } from '../../../../../../../../../org/joml/Vector3f.d.ts'
export class BlockRenderer extends AbstractBlockRenderContext implements BlockRendererAccessor, VertexEncoderInterface {
    constructor(arg0: ColorProviderRegistry, arg1: LightPipelineProvider)
    // private blockId: number;
    readonly buffers: ChunkBuildBuffers;
    // private collector: TranslucentGeometryCollector;
    // private colorProvider: ColorProvider<BlockState>;
    // private colorProviderRegistry: ColorProviderRegistry;
    // private cutoutLeaves: boolean;
    // private isFluid: number;
    // private lastBlockId: number;
    // private lightEmission: number;
    // private localX: number;
    // private localY: number;
    // private localZ: number;
    // private mutableColorProvider: ColorProvider<BlockState>;
    // private overrideRenderType: ChunkSectionLayer;
    // private posOffset: Vector3f;
    // private scratchPos: BlockPos$MutableBlockPos;
    // private vertexColors: number[];
    // private vertices: ChunkVertexEncoder$Vertex[];
    beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    // private bufferQuad(arg0: MutableQuadViewImpl, arg1: number[], arg2: Material): void;
    overrideBlock(arg0: number): void;
    prepare(arg0: ChunkBuildBuffers, arg1: LevelSlice, arg2: TranslucentGeometryCollector): void;
    processQuad(arg0: MutableQuadViewImpl): void;
    release(): void;
    renderModel(arg0: BlockStateModel, arg1: BlockState, arg2: BlockPos, arg3: BlockPos): void;
    restoreBlock(): void;
    // private tintQuad(arg0: MutableQuadViewImpl): void;
}