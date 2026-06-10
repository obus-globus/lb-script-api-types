import type { EventType } from '../../../jdk/jfr/EventType.d.ts'
import type { MetadataDescriptor$Element } from '../../../jdk/jfr/internal/MetadataDescriptor$Element.d.ts'
import type { Type } from '../../../jdk/jfr/internal/Type.d.ts'
import type { RecordingInput } from '../../../jdk/jfr/internal/consumer/RecordingInput.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MetadataDescriptor extends Object {
    static read(paramarg0: RecordingInput): MetadataDescriptor;
    constructor()
    // private dst: number;
    readonly eventTypes: EventType[];
    // private gmtOffset: number;
    locale: string;
    metadataId: number;
    // private root: MetadataDescriptor$Element;
    readonly types: Type[];
    getDST(): number;
    getEventTypes(): EventType[];
    getGMTOffset(): number;
    getLocale(): string;
    getTypes(): Type[];
    toString(): string;
}