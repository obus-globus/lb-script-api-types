import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TracingExecutor } from '../../../../../net/minecraft/TracingExecutor.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LevelRenderer } from '../../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { RenderBuffers } from '../../../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { SectionBufferBuilderPack } from '../../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
import type { SectionBufferBuilderPool } from '../../../../../net/minecraft/client/renderer/SectionBufferBuilderPool.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { CompileTaskDynamicQueue } from '../../../../../net/minecraft/client/renderer/chunk/CompileTaskDynamicQueue.d.ts'
import type { RenderRegionCache } from '../../../../../net/minecraft/client/renderer/chunk/RenderRegionCache.d.ts'
import type { SectionCompiler } from '../../../../../net/minecraft/client/renderer/chunk/SectionCompiler.d.ts'
import type { SectionMesh } from '../../../../../net/minecraft/client/renderer/chunk/SectionMesh.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { SectionRenderDispatcher$RenderSection$CompileTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$CompileTask.d.ts'
import type { SectionRenderDispatcher$RenderSectionBufferSlice } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSectionBufferSlice.d.ts'
import type { SectionRenderDispatcher$SectionUberBuffers } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$SectionUberBuffers.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SectionRenderDispatcher extends Object {
    constructor(level: ClientLevel, renderer: LevelRenderer, executor: TracingExecutor, renderBuffers: RenderBuffers, sectionCompiler: SectionCompiler)
    // private bufferPool: SectionBufferBuilderPool;
    readonly cameraPosition: AtomicReference<Vec3>;
    // private chunkUberBuffers: { [key in ChunkSectionLayer]: SectionRenderDispatcher$SectionUberBuffers };
    // private closed: boolean;
    // private compileQueue: CompileTaskDynamicQueue;
    // private copyLock: ReentrantLock;
    // private executor: TracingExecutor;
    // private fixedBuffers: SectionBufferBuilderPack;
    // private level: ClientLevel;
    // private renderer: LevelRenderer;
    // private sectionCompiler: SectionCompiler;
    clearCompileQueue(): void;
    dispose(): void;
    getCompileQueueSize(): number;
    getFreeBufferCount(): number;
    getRenderSectionSlice(sectionMesh: SectionMesh, layer: ChunkSectionLayer): SectionRenderDispatcher$RenderSectionBufferSlice;
    getStats(): string;
    isQueueEmpty(): boolean;
    lock(): void;
    rebuildSectionSync(section: SectionRenderDispatcher$RenderSection, cache: RenderRegionCache): void;
    // private runTask(): void;
    schedule(task: SectionRenderDispatcher$RenderSection$CompileTask): void;
    setCameraPosition(cameraPosition: Vec3): void;
    setLevel(level: ClientLevel, sectionCompiler: SectionCompiler): void;
    unlock(): void;
    uploadGlobalGeomBuffersToGPU(): void;
}