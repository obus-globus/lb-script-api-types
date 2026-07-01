import type { Object } from '../../../java/lang/Object.d.ts'
import type { PrimitiveSpreadBuilder } from '../../../kotlin/jvm/internal/PrimitiveSpreadBuilder.d.ts'
export class BooleanSpreadBuilder extends PrimitiveSpreadBuilder<(Object | null)[]> {
    constructor(size: number)
    // private values: (Object | null)[];
    add(value: boolean): void;
    toArray(): (Object | null)[];
}