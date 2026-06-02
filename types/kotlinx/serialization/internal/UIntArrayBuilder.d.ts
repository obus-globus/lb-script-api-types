import type { Object } from '../../../java/lang/Object.d.ts'
import type { UInt } from '../../../kotlin/UInt.d.ts'
import type { PrimitiveArrayBuilder } from '../../../kotlinx/serialization/internal/PrimitiveArrayBuilder.d.ts'
export class UIntArrayBuilder extends PrimitiveArrayBuilder<(Object | null)[]> {
    constructor(bufferWithData: (Object | null)[])
    // private buffer: (Object | null)[];
    // private position: number;
    /*not mapped: */ getPosition$kotlinx_serialization_core(): number;
    append(c: UInt): void;
    build(): (Object | null)[];
    ensureCapacity(requiredCapacity: number): void;
}