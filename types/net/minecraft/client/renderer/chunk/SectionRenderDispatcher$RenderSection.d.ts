import type { VertexSorting } from '../../../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { CompiledSectionMesh } from '../../../../../net/minecraft/client/renderer/chunk/CompiledSectionMesh.d.ts'
import type { RenderRegionCache } from '../../../../../net/minecraft/client/renderer/chunk/RenderRegionCache.d.ts'
import type { SectionMesh } from '../../../../../net/minecraft/client/renderer/chunk/SectionMesh.d.ts'
import type { SectionRenderDispatcher } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher.d.ts'
import type { SectionRenderDispatcher$RenderSection$CompileTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$CompileTask.d.ts'
import type { SectionRenderDispatcher$RenderSection$RebuildTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$RebuildTask.d.ts'
import type { SectionRenderDispatcher$RenderSection$ResortTransparencyTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$ResortTransparencyTask.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SectionRenderDispatcher$RenderSection extends Object {
    static SIZE: number;
    constructor(null_: SectionRenderDispatcher$RenderSection, index: number, sectionNode: number)
    // private bb: AABB;
    readonly dirty: boolean;
    readonly fadeDuration: number;
    index: number;
    // private lastRebuildTask: SectionRenderDispatcher$RenderSection$RebuildTask;
    // private lastResortTransparencyTask: SectionRenderDispatcher$RenderSection$ResortTransparencyTask;
    // private playerChanged: boolean;
    readonly renderOrigin: BlockPos$MutableBlockPos;
    readonly sectionMesh: AtomicReference<SectionMesh>;
    readonly sectionNode: number;
    // private uploadedTime: number;
    readonly wasPreviouslyEmpty: boolean;
    // private addSectionBuffersToUberBuffer(layer: ChunkSectionLayer, key: CompiledSectionMesh, vertexBuffer: ByteBuffer, indexBuffer: ByteBuffer): boolean;
    cancelTasks(): void;
    // private checkSectionMesh(compiledSectionMesh: CompiledSectionMesh): void;
    compileSync(cache: RenderRegionCache): void;
    createCompileTask(cache: RenderRegionCache): SectionRenderDispatcher$RenderSection$CompileTask;
    // private createVertexSorting(sectionPos: SectionPos, cameraPos: Vec3): VertexSorting;
    // private doesChunkExistAt(sectionNode: number): boolean;
    getBoundingBox(): AABB;
    getNeighborSectionNode(direction: Direction): number;
    getRenderOrigin(): BlockPos;
    getSectionMesh(): SectionMesh;
    getSectionNode(): number;
    getVisibility(now: number): number;
    hasAllNeighbors(): boolean;
    hasTranslucentGeometry(): boolean;
    indexBufferUploadCallback(sectionMesh: SectionMesh, layer: ChunkSectionLayer, sortedIndexBuffer: boolean): void;
    isDirty(): boolean;
    isDirtyFromPlayer(): boolean;
    rebuildSectionAsync(cache: RenderRegionCache): void;
    // private releaseSectionMesh(oldMesh: SectionMesh): void;
    reset(): void;
    resortTransparency(dispatcher: SectionRenderDispatcher): void;
    setDirty(fromPlayer: boolean): void;
    setFadeDuration(fadeDuration: number): void;
    setNotDirty(): void;
    // private setSectionMesh(sectionMesh: SectionMesh): SectionMesh;
    setSectionNode(sectionNode: number): void;
    setWasPreviouslyEmpty(wasPreviouslyEmpty: boolean): void;
    transparencyResortingScheduled(): boolean;
    vertexBufferUploadCallback(sectionMesh: SectionMesh, layer: ChunkSectionLayer): void;
    wasPreviouslyEmpty(): boolean;
}