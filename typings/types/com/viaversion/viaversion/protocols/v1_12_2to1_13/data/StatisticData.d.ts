import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StatisticData extends Record {
    constructor(categoryId: number, newId: number, value: number)
    // private categoryId: number;
    // private newId: number;
    // private value: number;
    categoryId(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    newId(): number;
    toString(): string;
    value(): number;
}