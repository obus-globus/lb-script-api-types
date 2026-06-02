import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SectionOcclusionGraph$GraphEvents } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$GraphEvents.d.ts'
import type { SectionOcclusionGraph$GraphStorage } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph$GraphStorage.d.ts'
import type { ViewArea } from '../../../../net/minecraft/client/renderer/ViewArea.d.ts'
export class SectionOcclusionGraph$GraphState extends Record {
    private constructor(storage: SectionOcclusionGraph$GraphStorage, events: SectionOcclusionGraph$GraphEvents)
    private constructor(viewArea: ViewArea)
    // private events: SectionOcclusionGraph$GraphEvents;
    // private storage: SectionOcclusionGraph$GraphStorage;
    equals(o: Object | null): boolean;
    events(): SectionOcclusionGraph$GraphEvents;
    hashCode(): number;
    storage(): SectionOcclusionGraph$GraphStorage;
    toString(): string;
}