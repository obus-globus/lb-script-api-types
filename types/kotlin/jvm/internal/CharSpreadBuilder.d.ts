import type { PrimitiveSpreadBuilder } from '../../../kotlin/jvm/internal/PrimitiveSpreadBuilder.d.ts'
export class CharSpreadBuilder extends PrimitiveSpreadBuilder<string[]> {
    constructor(size: number)
    // private values: string[];
    add(value: string): void;
    toArray(): string[];
}