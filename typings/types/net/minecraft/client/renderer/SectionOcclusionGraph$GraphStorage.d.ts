import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Octree } from '../../../../net/minecraft/client/renderer/Octree.d.ts'
import type { SectionOcclusionGraph$SectionToNodeMap } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$SectionToNodeMap.d.ts'
import type { ViewArea } from '../../../../net/minecraft/client/renderer/ViewArea.d.ts'
export class SectionOcclusionGraph$GraphStorage extends Object {
    constructor(viewArea: ViewArea)
    sectionToNodeMap: SectionOcclusionGraph$SectionToNodeMap;
    sectionTree: Octree;
    sectionsWaitingForChunkLoads: { [key: string]: any };
}