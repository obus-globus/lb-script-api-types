import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { SerialKind } from '../../../kotlinx/serialization/descriptors/SerialKind.d.ts'
import type { CachedNames } from '../../../kotlinx/serialization/internal/CachedNames.d.ts'
import type { GeneratedSerializer } from '../../../kotlinx/serialization/internal/GeneratedSerializer.d.ts'
export class PluginGeneratedSerialDescriptor extends Object implements SerialDescriptor, CachedNames {
    constructor(serialName: string, generatedSerializer: GeneratedSerializer<Object> | null, elementsCount: number)
    // private _hashCode: number;
    // private /*not mapped: */ get_hashCode(): number;
    // private added: number;
    readonly annotations: Annotation[];
    // private childSerializers: KSerializer<Object>[];
    // private /*not mapped: */ getChildSerializers(): KSerializer<Object>[];
    // private classAnnotations: Annotation[] | null;
    readonly elementsCount: number;
    // private elementsOptionality: (Object | null)[];
    // private generatedSerializer: GeneratedSerializer<Object> | null;
    // private indices: { [key: string]: number };
    readonly kind: SerialKind;
    // private names: string[];
    // private propertiesAnnotations: (Annotation[] | null)[];
    readonly serialName: string;
    readonly serialNames: string[];
    // private typeParameterDescriptors: SerialDescriptor[];
    /*not mapped: */ getTypeParameterDescriptors$kotlinx_serialization_core(): SerialDescriptor[];
    addElement(name: string, isOptional: boolean): void;
    // private buildIndices(): { [key: string]: number };
    equals(other: Object | null): boolean;
    getElementAnnotations(index: number): Annotation[];
    getElementDescriptor(index: number): SerialDescriptor;
    getElementIndex(name: string): number;
    getElementName(index: number): string;
    hashCode(): number;
    isElementOptional(index: number): boolean;
    pushAnnotation(annotation: Annotation): void;
    pushClassAnnotation(a: Annotation): void;
    toString(): string;
}