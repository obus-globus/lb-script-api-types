import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { Octree } from '../../../../net/minecraft/client/renderer/Octree.d.ts'
import type { SectionOcclusionGraph$GraphEvents } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$GraphEvents.d.ts'
import type { SectionOcclusionGraph$GraphState } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$GraphState.d.ts'
import type { SectionOcclusionGraph$GraphStorage } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$GraphStorage.d.ts'
import type { SectionOcclusionGraph$Node } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$Node.d.ts'
import type { ViewArea } from '../../../../net/minecraft/client/renderer/ViewArea.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SectionOcclusionGraph extends Object {
    constructor()
    // private currentGraph: AtomicReference<SectionOcclusionGraph$GraphState>;
    // private fullUpdateTask: Future<Object>;
    // private needsFrustumUpdate: AtomicBoolean;
    // private needsFullUpdate: boolean;
    // private nextGraphEvents: AtomicReference<SectionOcclusionGraph$GraphEvents>;
    // private viewArea: ViewArea;
    // private addNeighbors(events: SectionOcclusionGraph$GraphEvents, pos: ChunkPos): void;
    addSectionsInFrustum(frustum: Frustum, visibleSections: SectionRenderDispatcher$RenderSection[], nearbyVisibleSection: SectionRenderDispatcher$RenderSection[]): void;
    consumeFrustumUpdate(): boolean;
    getNode(section: SectionRenderDispatcher$RenderSection): SectionOcclusionGraph$Node;
    getOctree(): Octree;
    // private getRelativeFrom(cameraSectionNode: number, renderSection: SectionRenderDispatcher$RenderSection, direction: Direction): SectionRenderDispatcher$RenderSection;
    // private initializeQueueForFullUpdate(camera: Camera, queue: SectionOcclusionGraph$Node[]): void;
    invalidate(): void;
    // private isInViewDistance(cameraSectionNode: number, sectionNode: number): boolean;
    onChunkReadyToRender(pos: ChunkPos): void;
    // private queueSectionsWithNewNeighbors(state: SectionOcclusionGraph$GraphState): void;
    // private runPartialUpdate(smartCull: boolean, frustum: Frustum, visibleSections: SectionRenderDispatcher$RenderSection[], cameraPos: Vec3, loadedEmptySections: (Object | null)[]): void;
    // private runUpdates(storage: SectionOcclusionGraph$GraphStorage, cameraPos: Vec3, queue: SectionOcclusionGraph$Node[], smartCull: boolean, onSectionAdded: (param0: SectionRenderDispatcher$RenderSection) => void, emptySections: (Object | null)[]): void;
    // private scheduleFullUpdate(smartCull: boolean, camera: Camera, cameraPos: Vec3, loadedEmptySections: (Object | null)[]): void;
    schedulePropagationFrom(section: SectionRenderDispatcher$RenderSection): void;
    update(smartCull: boolean, camera: Camera, frustum: Frustum, visibleSections: SectionRenderDispatcher$RenderSection[], loadedEmptySections: (Object | null)[]): void;
    waitAndReset(viewArea: ViewArea): void;
}