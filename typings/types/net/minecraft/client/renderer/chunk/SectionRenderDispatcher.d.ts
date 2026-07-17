import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StagingBuffer } from '../../../../../com/mojang/blaze3d/vertex/StagingBuffer.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TracingExecutor } from '../../../../../net/minecraft/TracingExecutor.d.ts'
import type { RenderBuffers } from '../../../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { SectionBufferBuilderPack } from '../../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
import type { SectionBufferBuilderPool } from '../../../../../net/minecraft/client/renderer/SectionBufferBuilderPool.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { SectionCompiler } from '../../../../../net/minecraft/client/renderer/chunk/SectionCompiler.d.ts'
import type { SectionMesh } from '../../../../../net/minecraft/client/renderer/chunk/SectionMesh.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { SectionRenderDispatcher$RenderSection$SectionTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$SectionTask.d.ts'
import type { SectionRenderDispatcher$RenderSectionBufferSlice } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSectionBufferSlice.d.ts'
import type { SectionRenderDispatcher$SectionUberBuffers } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$SectionUberBuffers.d.ts'
import type { SectionTaskDynamicQueue } from '../../../../../net/minecraft/client/renderer/chunk/SectionTaskDynamicQueue.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SectionRenderDispatcher extends Object {
    static NEARBY_SECTION_DISTANCE_IN_BLOCKS: number;
    constructor(executor: TracingExecutor, renderBuffers: RenderBuffers, sectionCompiler: SectionCompiler, onSectionMeshUpdate: (param0: SectionRenderDispatcher$RenderSection) => void)
    // private bufferPool: SectionBufferBuilderPool;
    readonly cameraPosition: AtomicReference<Vec3>;
    // private chunkUberBuffers: JavaMap<ChunkSectionLayer, SectionRenderDispatcher$SectionUberBuffers>;
    // private closed: boolean;
    // private copyLock: ReentrantLock;
    // private executor: TracingExecutor;
    // private fixedBuffers: SectionBufferBuilderPack;
    // private onSectionMeshUpdate: (param0: SectionRenderDispatcher$RenderSection) => void;
    // private queue: SectionTaskDynamicQueue;
    // private sectionCompiler: SectionCompiler;
    // private stagingBuffer: StagingBuffer;
    clearCompileQueue(): void;
    dispose(): void;
    getCompileQueueSize(): number;
    getFreeBufferCount(): number;
    getRenderSectionSlice(sectionMesh: SectionMesh, layer: ChunkSectionLayer): SectionRenderDispatcher$RenderSectionBufferSlice;
    getStats(): string;
    isQueueEmpty(): boolean;
    lock(): void;
    // private runTask(): void;
    // private schedule(task: SectionRenderDispatcher$RenderSection$SectionTask): void;
    setCameraPosition(cameraPosition: Vec3): void;
    setCompiler(sectionCompiler: SectionCompiler): void;
    unlock(): void;
    uploadTerrainBuffersToGpu(): void;
}