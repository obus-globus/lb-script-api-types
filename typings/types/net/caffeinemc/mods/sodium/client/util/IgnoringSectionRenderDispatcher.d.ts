import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { TracingExecutor } from '../../../../../../net/minecraft/TracingExecutor.d.ts'
import type { RenderBuffers } from '../../../../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { ChunkSectionLayer } from '../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { SectionCompiler } from '../../../../../../net/minecraft/client/renderer/chunk/SectionCompiler.d.ts'
import type { SectionMesh } from '../../../../../../net/minecraft/client/renderer/chunk/SectionMesh.d.ts'
import type { SectionRenderDispatcher } from '../../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { SectionRenderDispatcher$RenderSectionBufferSlice } from '../../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSectionBufferSlice.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class IgnoringSectionRenderDispatcher extends SectionRenderDispatcher {
    static NEARBY_SECTION_DISTANCE_IN_BLOCKS: number;
    constructor(arg0: TracingExecutor, arg1: RenderBuffers, arg2: SectionCompiler, arg3: (param0: SectionRenderDispatcher$RenderSection) => void)
    clearCompileQueue(): void;
    dispose(): void;
    getCompileQueueSize(): number;
    getFreeBufferCount(): number;
    getRenderSectionSlice(arg0: SectionMesh, arg1: ChunkSectionLayer): SectionRenderDispatcher$RenderSectionBufferSlice;
    getStats(): string;
    isQueueEmpty(): boolean;
    lock(): void;
    setCameraPosition(arg0: Vec3): void;
    setCompiler(arg0: SectionCompiler): void;
    unlock(): void;
    uploadTerrainBuffersToGpu(): void;
}