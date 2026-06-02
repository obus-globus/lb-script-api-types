import type { PrimitiveArrayBuilder } from '../../../kotlinx/serialization/internal/PrimitiveArrayBuilder.d.ts'
export class CharArrayBuilder extends PrimitiveArrayBuilder<string[]> {
    constructor(bufferWithData: string[])
    // private buffer: string[];
    // private position: number;
    /*not mapped: */ getPosition$kotlinx_serialization_core(): number;
    append(c: string): void;
    build(): string[];
    ensureCapacity(requiredCapacity: number): void;
}