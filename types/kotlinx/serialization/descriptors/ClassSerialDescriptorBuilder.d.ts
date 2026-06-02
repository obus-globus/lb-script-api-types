import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class ClassSerialDescriptorBuilder extends Object {
    constructor(serialName: string)
    annotations: Annotation[];
    // private elementAnnotations: Annotation[][];
    /*not mapped: */ getElementAnnotations$kotlinx_serialization_core(): Annotation[][];
    // private elementDescriptors: SerialDescriptor[];
    /*not mapped: */ getElementDescriptors$kotlinx_serialization_core(): SerialDescriptor[];
    // private elementNames: string[];
    /*not mapped: */ getElementNames$kotlinx_serialization_core(): string[];
    // private elementOptionality: boolean[];
    /*not mapped: */ getElementOptionality$kotlinx_serialization_core(): boolean[];
    // private isNullable: boolean;
    /*not mapped: */ isNullable(): boolean;
    readonly serialName: string;
    // private uniqueNames: string[];
    element(elementName: string, descriptor: SerialDescriptor, annotations: Annotation[], isOptional: boolean): void;
}