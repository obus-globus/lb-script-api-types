import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder$Companion } from '../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { TaggedDecoder } from '../../../kotlinx/serialization/internal/TaggedDecoder.d.ts'
export abstract class NamedValueDecoder extends TaggedDecoder<string> {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor()
    protected composeName(parentName: string, childName: string): string;
    protected elementName(descriptor: SerialDescriptor, index: number): string;
    protected nested(nestedName: string): string;
    protected renderTagStack(): string;
}