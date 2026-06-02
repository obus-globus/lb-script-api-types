import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
export class SectionOcclusionGraph$GraphEvents extends Record {
    private constructor()
    private constructor(chunksWhichReceivedNeighbors: (Object | null)[], sectionsToPropagateFrom: SectionRenderDispatcher$RenderSection[])
    // private chunksWhichReceivedNeighbors: (Object | null)[];
    // private sectionsToPropagateFrom: SectionRenderDispatcher$RenderSection[];
    chunksWhichReceivedNeighbors(): (Object | null)[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    sectionsToPropagateFrom(): SectionRenderDispatcher$RenderSection[];
    toString(): string;
}