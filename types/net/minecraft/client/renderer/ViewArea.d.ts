import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LevelRenderer } from '../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { SectionRenderDispatcher } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../net/minecraft/core/SectionPos.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelHeightAccessor } from '../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
export class ViewArea extends Object {
    constructor(sectionRenderDispatcher: SectionRenderDispatcher, level: Level, renderDistance: number, levelRenderer: LevelRenderer)
    readonly cameraSectionPos: SectionPos;
    // private level: Level;
    // private levelRenderer: LevelRenderer;
    // private sectionGridSizeX: number;
    // private sectionGridSizeY: number;
    // private sectionGridSizeZ: number;
    sections: SectionRenderDispatcher$RenderSection[];
    readonly viewDistance: number;
    // private containsSection(sectionX: number, sectionY: number, sectionZ: number): boolean;
    createSections(sectionRenderDispatcher: SectionRenderDispatcher): void;
    getCameraSectionPos(): SectionPos;
    getLevelHeightAccessor(): LevelHeightAccessor;
    // private getRenderSection(sectionX: number, sectionY: number, sectionZ: number): SectionRenderDispatcher$RenderSection;
    getRenderSection(sectionNode: number): SectionRenderDispatcher$RenderSection;
    getRenderSectionAt(pos: BlockPos): SectionRenderDispatcher$RenderSection;
    // private getSectionIndex(x: number, y: number, z: number): number;
    getViewDistance(): number;
    releaseAllBuffers(): void;
    repositionCamera(cameraSectionPos: SectionPos): void;
    setDirty(sectionX: number, sectionY: number, sectionZ: number, playerChanged: boolean): void;
    setViewDistance(renderDistance: number): void;
}