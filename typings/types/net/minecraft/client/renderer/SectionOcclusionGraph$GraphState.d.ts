import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SectionOcclusionGraph$GraphStorage } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$GraphStorage.d.ts'
import type { ViewArea } from '../../../../net/minecraft/client/renderer/ViewArea.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
export class SectionOcclusionGraph$GraphState extends Record {
    private constructor(storage: SectionOcclusionGraph$GraphStorage, sectionsToPropagateFrom: SectionRenderDispatcher$RenderSection[])
    private constructor(viewArea: ViewArea)
    // private sectionsToPropagateFrom: SectionRenderDispatcher$RenderSection[];
    // private storage: SectionOcclusionGraph$GraphStorage;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sectionsToPropagateFrom(): SectionRenderDispatcher$RenderSection[];
    storage(): SectionOcclusionGraph$GraphStorage;
    toString(): string;
}