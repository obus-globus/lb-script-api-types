import type { Object } from '../../../java/lang/Object.d.ts'
import type { UShort } from '../../../kotlin/UShort.d.ts'
import type { PrimitiveArrayBuilder } from '../../../kotlinx/serialization/internal/PrimitiveArrayBuilder.d.ts'
export class UShortArrayBuilder extends PrimitiveArrayBuilder<(Object | null)[]> {
    protected constructor()
    // private buffer: (Object | null)[];
    // private position: number;
    /*not mapped: */ getPosition$kotlinx_serialization_core(): number;
    append(c: UShort): void;
    build(): (Object | null)[];
    ensureCapacity(requiredCapacity: number): void;
}