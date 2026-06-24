import type { VertexSorting } from '../../../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RotatingSectionStorage$Value } from '../../../../../net/minecraft/client/RotatingSectionStorage$Value.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { CompiledSectionMesh } from '../../../../../net/minecraft/client/renderer/chunk/CompiledSectionMesh.d.ts'
import type { RenderSectionRegion } from '../../../../../net/minecraft/client/renderer/chunk/RenderSectionRegion.d.ts'
import type { SectionMesh } from '../../../../../net/minecraft/client/renderer/chunk/SectionMesh.d.ts'
import type { SectionRenderDispatcher } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher.d.ts'
import type { SectionRenderDispatcher$RenderSection$CompileTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$CompileTask.d.ts'
import type { SectionRenderDispatcher$RenderSection$ResortTransparencyTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$ResortTransparencyTask.d.ts'
import type { SectionRenderDispatcher$RenderSection$SectionTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$SectionTask.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SectionRenderDispatcher$RenderSection extends Object implements RotatingSectionStorage$Value {
    constructor(null_: SectionRenderDispatcher, index: number, sectionNode: number)
    // private bb: AABB;
    readonly fadeDuration: number;
    index: number;
    // private lastCompileTask: SectionRenderDispatcher$RenderSection$CompileTask;
    // private lastResortTransparencyTask: SectionRenderDispatcher$RenderSection$ResortTransparencyTask;
    readonly renderOrigin: BlockPos$MutableBlockPos;
    readonly sectionMesh: AtomicReference<SectionMesh>;
    readonly sectionNode: number;
    // private uploadedTime: number;
    // private addSectionBuffersToUberBuffer(layer: ChunkSectionLayer, key: CompiledSectionMesh, vertexBuffer: ByteBuffer, indexBuffer: ByteBuffer): boolean;
    // private cancelTasks(): void;
    // private checkSectionMesh(compiledSectionMesh: CompiledSectionMesh): void;
    compileAsync(region: RenderSectionRegion): void;
    compileSync(region: RenderSectionRegion): void;
    // private createCompileTask(region: RenderSectionRegion): SectionRenderDispatcher$RenderSection$SectionTask;
    // private createVertexSorting(sectionPos: SectionPos, cameraPos: Vec3): VertexSorting;
    getBoundingBox(): AABB;
    getNeighborSectionNode(direction: Direction): number;
    getRenderOrigin(): BlockPos;
    getSectionMesh(): SectionMesh;
    getSectionNode(): number;
    getVisibility(now: number): number;
    hasTranslucentGeometry(): boolean;
    // private indexBufferUploadCallback(sectionMesh: CompiledSectionMesh, layer: ChunkSectionLayer, sortedIndexBuffer: boolean): void;
    // private releaseSectionMesh(oldMesh: SectionMesh): void;
    reset(): void;
    resortTransparency(): void;
    setFadeDuration(fadeDuration: number): void;
    // private setSectionMesh(sectionMesh: SectionMesh): SectionMesh;
    setSectionNode(sectionNode: number): void;
    setWasPreviouslyEmpty(wasPreviouslyEmpty: boolean): void;
    transparencyResortingScheduled(): boolean;
    // private vertexBufferUploadCallback(sectionMesh: CompiledSectionMesh, layer: ChunkSectionLayer): void;
    wasPreviouslyEmpty(): boolean;
}