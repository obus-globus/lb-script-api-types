import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SectionOcclusionGraph } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph.d.ts'
import type { SectionRenderDispatcher } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../net/minecraft/core/SectionPos.d.ts'
export class ViewArea extends Object {
    constructor(sectionRenderDispatcher: SectionRenderDispatcher, minY: number, maxY: number, minSectionY: number, maxSectionY: number, renderDistance: number, sectionOcclusionGraph: SectionOcclusionGraph)
    // private maxY: number;
    // private minY: number;
    // private sectionOcclusionGraph: SectionOcclusionGraph;
    // private sections: SectionRenderDispatcher$RenderSection[];
    getCameraSectionPos(): SectionPos;
    getRenderSection(sectionNode: number): SectionRenderDispatcher$RenderSection;
    getRenderSectionAt(pos: BlockPos): SectionRenderDispatcher$RenderSection;
    getViewDistance(): number;
    maxSectionY(): number;
    maxY(): number;
    minSectionY(): number;
    minY(): number;
    releaseAllBuffers(): void;
    repositionCamera(cameraSectionPos: SectionPos): boolean;
    sectionCount(): number;
    size(): number;
}