import type { Object } from '../../../java/lang/Object.d.ts'
import type { UByte } from '../../../kotlin/UByte.d.ts'
import type { PrimitiveArrayBuilder } from '../../../kotlinx/serialization/internal/PrimitiveArrayBuilder.d.ts'
export class UByteArrayBuilder extends PrimitiveArrayBuilder<(Object | null)[]> {
    constructor(bufferWithData: (Object | null)[])
    // private buffer: (Object | null)[];
    // private position: number;
    /*not mapped: */ getPosition$kotlinx_serialization_core(): number;
    append(c: UByte): void;
    build(): (Object | null)[];
    ensureCapacity(requiredCapacity: number): void;
}