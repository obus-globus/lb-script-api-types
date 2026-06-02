import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { SerialKind } from '../../../kotlinx/serialization/descriptors/SerialKind.d.ts'
export class NothingSerialDescriptor extends Object implements SerialDescriptor {
    static INSTANCE: NothingSerialDescriptor;
    readonly elementsCount: number;
    readonly kind: SerialKind;
    readonly serialName: string;
    equals(other: Object | null): boolean;
    // private error(): void;
    getElementAnnotations(index: number): Annotation[];
    getElementDescriptor(index: number): SerialDescriptor;
    getElementIndex(name: string): number;
    getElementName(index: number): string;
    hashCode(): number;
    isElementOptional(index: number): boolean;
    toString(): string;
}