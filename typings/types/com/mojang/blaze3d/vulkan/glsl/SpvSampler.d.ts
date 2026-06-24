import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpvSampler extends Record {
    constructor(name: string, bindingOffset: number, dimensions: number)
    // private bindingOffset: number;
    // private dimensions: number;
    // private name: string;
    bindingOffset(): number;
    dimensions(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
}