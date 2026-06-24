import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Octree } from '../../../../net/minecraft/client/renderer/Octree.d.ts'
import type { SectionOcclusionGraph$GraphState } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$GraphState.d.ts'
import type { SectionOcclusionGraph$GraphStorage } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$GraphStorage.d.ts'
import type { SectionOcclusionGraph$Node } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$Node.d.ts'
import type { ViewArea } from '../../../../net/minecraft/client/renderer/ViewArea.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { ChunkLoadingRenderState } from '../../../../net/minecraft/client/renderer/state/level/ChunkLoadingRenderState.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SectionOcclusionGraph extends Object {
    constructor()
    // private currentGraph: AtomicReference<SectionOcclusionGraph$GraphState>;
    // private emptySections: (Object | null)[];
    // private fullUpdateTask: Future<Object>;
    // private lastSmartCull: boolean;
    // private loadedChunks: (Object | null)[];
    // private needsFrustumUpdate: AtomicBoolean;
    // private needsFullUpdate: boolean;
    // private nextSectionsToPropagateFrom: SectionRenderDispatcher$RenderSection[];
    // private prevCamX: number;
    // private prevCamY: number;
    // private prevCamZ: number;
    // private prevFov: number;
    // private viewArea: ViewArea;
    addSectionsInFrustum(frustum: Frustum, visibleSections: SectionRenderDispatcher$RenderSection[], nearbyVisibleSection: SectionRenderDispatcher$RenderSection[]): void;
    consumeFrustumUpdate(): boolean;
    expectedChunks(): (Object | null)[];
    getNode(section: SectionRenderDispatcher$RenderSection): SectionOcclusionGraph$Node;
    getOctree(): Octree;
    // private getRelativeFrom(cameraSectionNode: number, renderSection: SectionRenderDispatcher$RenderSection, direction: Direction): SectionRenderDispatcher$RenderSection;
    // private initializeQueueForFullUpdate(cameraPosition: BlockPos, queue: SectionOcclusionGraph$Node[]): void;
    invalidate(): void;
    invalidateIfNeeded(camera: CameraRenderState, fov: number): void;
    // private isInViewDistance(cameraSectionNode: number, sectionNode: number): boolean;
    // private runPartialUpdate(camera: CameraRenderState, loadedExpectedChunks: (Object | null)[]): void;
    // private runUpdates(storage: SectionOcclusionGraph$GraphStorage, cameraPos: Vec3, queue: SectionOcclusionGraph$Node[], smartCull: boolean, onSectionAdded: (param0: SectionRenderDispatcher$RenderSection) => void, emptySections: (Object | null)[], loadedChunks: (Object | null)[]): void;
    // private scheduleFullUpdate(camera: CameraRenderState): void;
    schedulePropagationFrom(section: SectionRenderDispatcher$RenderSection): void;
    update(camera: CameraRenderState, fov: number, chunkLoadingRenderState: ChunkLoadingRenderState): void;
    updateEmptySections(added: (Object | null)[], removed: (Object | null)[]): void;
    updateLoadedChunks(added: (Object | null)[], removed: (Object | null)[]): void;
    waitAndReset(viewArea: ViewArea): void;
}