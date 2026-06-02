import type { PrimitiveArrayBuilder } from '../../../kotlinx/serialization/internal/PrimitiveArrayBuilder.d.ts'
export class FloatArrayBuilder extends PrimitiveArrayBuilder<number[]> {
    constructor(bufferWithData: number[])
    // private buffer: number[];
    // private position: number;
    /*not mapped: */ getPosition$kotlinx_serialization_core(): number;
    append(c: number): void;
    build(): number[];
    ensureCapacity(requiredCapacity: number): void;
}