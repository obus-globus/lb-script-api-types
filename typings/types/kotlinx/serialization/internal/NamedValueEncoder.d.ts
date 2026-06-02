import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { TaggedEncoder } from '../../../kotlinx/serialization/internal/TaggedEncoder.d.ts'
export abstract class NamedValueEncoder extends TaggedEncoder<string> {
    constructor()
    protected composeName(parentName: string, childName: string): string;
    protected elementName(descriptor: SerialDescriptor, index: number): string;
    protected nested(nestedName: string): string;
}