import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SectionOcclusionGraph$Node } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$Node.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
export class SectionOcclusionGraph$SectionToNodeMap extends Object {
    private constructor(sectionCount: number)
    // private nodes: SectionOcclusionGraph$Node[];
    get(renderSection: SectionRenderDispatcher$RenderSection): SectionOcclusionGraph$Node;
    put(renderSection: SectionRenderDispatcher$RenderSection, node: SectionOcclusionGraph$Node): void;
}