import type { PrimitiveSpreadBuilder } from '../../../kotlin/jvm/internal/PrimitiveSpreadBuilder.d.ts'
export class ShortSpreadBuilder extends PrimitiveSpreadBuilder<number[]> {
    constructor(size: number)
    // private values: number[];
    add(value: number): void;
    toArray(): number[];
}