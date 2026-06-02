import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { SectionMesh$SectionDraw } from '../../../../../net/minecraft/client/renderer/chunk/SectionMesh$SectionDraw.d.ts'
import type { TranslucencyPointOfView } from '../../../../../net/minecraft/client/renderer/chunk/TranslucencyPointOfView.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export interface SectionMesh extends AutoCloseable, Object{
    close(): void;
    facesCanSeeEachother(direction1: Direction, direction2: Direction): boolean;
    getRenderableBlockEntities(): BlockEntity[];
    getSectionDraw(layer: ChunkSectionLayer): SectionMesh$SectionDraw;
    hasRenderableLayers(): boolean;
    hasTranslucentGeometry(): boolean;
    isDifferentPointOfView(pointOfView: TranslucencyPointOfView): boolean;
    isEmpty(layer: ChunkSectionLayer): boolean;
}