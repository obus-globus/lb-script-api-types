import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { SerialKind } from '../../../kotlinx/serialization/descriptors/SerialKind.d.ts'
import type { PluginGeneratedSerialDescriptor } from '../../../kotlinx/serialization/internal/PluginGeneratedSerialDescriptor.d.ts'
export class EnumDescriptor extends PluginGeneratedSerialDescriptor {
    constructor(name: string, elementsCount: number)
    // private elementDescriptors: SerialDescriptor[];
    // private /*not mapped: */ getElementDescriptors(): SerialDescriptor[];
    readonly kind: SerialKind;
    equals(other: Object | null): boolean;
    getElementDescriptor(index: number): SerialDescriptor;
    hashCode(): number;
    toString(): string;
}