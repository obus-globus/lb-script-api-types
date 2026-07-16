import type { MeshData$SortState } from '../../../../../com/mojang/blaze3d/vertex/MeshData$SortState.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { SectionCompiler$Results } from '../../../../../net/minecraft/client/renderer/chunk/SectionCompiler$Results.d.ts'
import type { SectionMesh } from '../../../../../net/minecraft/client/renderer/chunk/SectionMesh.d.ts'
import type { SectionMesh$SectionDraw } from '../../../../../net/minecraft/client/renderer/chunk/SectionMesh$SectionDraw.d.ts'
import type { TranslucencyPointOfView } from '../../../../../net/minecraft/client/renderer/chunk/TranslucencyPointOfView.d.ts'
import type { VisibilitySet } from '../../../../../net/minecraft/client/renderer/chunk/VisibilitySet.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class CompiledSectionMesh extends Object implements SectionMesh {
    static EMPTY: SectionMesh;
    static UNCOMPILED: SectionMesh;
    constructor(translucencyPointOfView: TranslucencyPointOfView, results: SectionCompiler$Results)
    // private draws: Map<ChunkSectionLayer, SectionMesh$SectionDraw>;
    readonly indexBufferUploaded: Map<ChunkSectionLayer, AtomicBoolean>;
    readonly renderableBlockEntities: BlockEntity[];
    readonly translucencyPointOfView: TranslucencyPointOfView;
    readonly transparencyState: MeshData$SortState;
    readonly vertexBufferUploaded: Map<ChunkSectionLayer, AtomicBoolean>;
    // private visibilitySet: VisibilitySet;
    close(): void;
    facesCanSeeEachother(direction1: Direction, direction2: Direction): boolean;
    getRenderableBlockEntities(): BlockEntity[];
    getSectionDraw(layer: ChunkSectionLayer): SectionMesh$SectionDraw;
    getTransparencyState(): MeshData$SortState;
    hasRenderableLayers(): boolean;
    hasTranslucentGeometry(): boolean;
    isDifferentPointOfView(pointOfView: TranslucencyPointOfView): boolean;
    isEmpty(layer: ChunkSectionLayer): boolean;
    isIndexBufferUploaded(layer: ChunkSectionLayer): boolean;
    isVertexBufferUploaded(layer: ChunkSectionLayer): boolean;
    setIndexBufferUploaded(layer: ChunkSectionLayer): void;
    setTranslucencyPointOfView(translucencyPointOfView: TranslucencyPointOfView): void;
    setVertexBufferUploaded(layer: ChunkSectionLayer): void;
}