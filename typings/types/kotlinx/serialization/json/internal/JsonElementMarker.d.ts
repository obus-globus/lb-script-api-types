import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { ElementMarker } from '../../../../kotlinx/serialization/internal/ElementMarker.d.ts'
export class JsonElementMarker extends Object {
    constructor(descriptor: SerialDescriptor)
    // private isUnmarkedNull: boolean;
    /*not mapped: */ isUnmarkedNull$kotlinx_serialization_json(): boolean;
    // private origin: ElementMarker;
    mark(index: number): void;
    nextUnmarkedIndex(): number;
    // private readIfAbsent(descriptor: SerialDescriptor, index: number): boolean;
}