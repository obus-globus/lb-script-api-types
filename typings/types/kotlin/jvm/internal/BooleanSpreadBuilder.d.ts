import type { PrimitiveSpreadBuilder } from '../../../kotlin/jvm/internal/PrimitiveSpreadBuilder.d.ts'
export class BooleanSpreadBuilder extends PrimitiveSpreadBuilder<boolean[]> {
    constructor(size: number)
    // private values: boolean[];
    add(value: boolean): void;
    toArray(): boolean[];
}