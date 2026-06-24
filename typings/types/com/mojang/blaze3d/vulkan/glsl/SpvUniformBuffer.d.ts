import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpvUniformBuffer extends Record {
    constructor(name: string, bindingOffset: number)
    // private bindingOffset: number;
    // private name: string;
    bindingOffset(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
}