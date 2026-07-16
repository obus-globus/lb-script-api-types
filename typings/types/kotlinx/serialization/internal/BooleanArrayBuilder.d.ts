import type { PrimitiveArrayBuilder } from '../../../kotlinx/serialization/internal/PrimitiveArrayBuilder.d.ts'
export class BooleanArrayBuilder extends PrimitiveArrayBuilder<boolean[]> {
    constructor(bufferWithData: boolean[])
    // private buffer: boolean[];
    // private position: number;
    /*not mapped: */ getPosition$kotlinx_serialization_core(): number;
    append(c: boolean): void;
    build(): boolean[];
    ensureCapacity(requiredCapacity: number): void;
}