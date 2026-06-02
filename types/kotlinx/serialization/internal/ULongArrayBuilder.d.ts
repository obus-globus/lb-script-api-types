import type { Object } from '../../../java/lang/Object.d.ts'
import type { ULong } from '../../../kotlin/ULong.d.ts'
import type { PrimitiveArrayBuilder } from '../../../kotlinx/serialization/internal/PrimitiveArrayBuilder.d.ts'
export class ULongArrayBuilder extends PrimitiveArrayBuilder<(Object | null)[]> {
    constructor(bufferWithData: (Object | null)[])
    // private buffer: (Object | null)[];
    // private position: number;
    /*not mapped: */ getPosition$kotlinx_serialization_core(): number;
    append(c: ULong): void;
    build(): (Object | null)[];
    ensureCapacity(requiredCapacity: number): void;
}