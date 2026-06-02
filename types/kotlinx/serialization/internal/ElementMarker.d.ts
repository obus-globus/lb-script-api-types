import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class ElementMarker extends Object {
    constructor(descriptor: SerialDescriptor, readIfAbsent: Function2<SerialDescriptor, number, boolean>)
    // private descriptor: SerialDescriptor;
    // private highMarksArray: number[];
    // private lowerMarks: number;
    // private readIfAbsent: (param0: SerialDescriptor, param1: number) => boolean;
    mark(index: number): void;
    // private markHigh(index: number): void;
    // private nextUnmarkedHighIndex(): number;
    nextUnmarkedIndex(): number;
    // private prepareHighMarksArray(elementsCount: number): number[];
}