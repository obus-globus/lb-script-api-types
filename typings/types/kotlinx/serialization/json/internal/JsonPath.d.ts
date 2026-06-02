import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class JsonPath extends Object {
    constructor()
    // private currentDepth: number;
    // private currentObjectPath: (Object | null)[];
    // private indicies: number[];
    getPath(): string;
    popDescriptor(): void;
    // private prettyString(it: Object | null): string;
    pushDescriptor(sd: SerialDescriptor): void;
    resetCurrentMapKey(): void;
    // private resize(): void;
    toString(): string;
    updateCurrentMapKey(key: Object | null): void;
    updateDescriptorIndex(index: number): void;
}