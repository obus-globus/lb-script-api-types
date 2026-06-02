import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Octree } from '../../../../net/minecraft/client/renderer/Octree.d.ts'
import type { SectionOcclusionGraph$SectionToNodeMap } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$SectionToNodeMap.d.ts'
import type { ViewArea } from '../../../../net/minecraft/client/renderer/ViewArea.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
export class SectionOcclusionGraph$GraphStorage extends Object {
    constructor(viewArea: ViewArea)
    chunksWaitingForNeighbors: Long2ObjectMap<SectionRenderDispatcher$RenderSection[]>;
    sectionToNodeMap: SectionOcclusionGraph$SectionToNodeMap;
    sectionTree: Octree;
}