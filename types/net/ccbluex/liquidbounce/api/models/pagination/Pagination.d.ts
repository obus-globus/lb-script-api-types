import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Pagination extends Object {
    constructor(current: number, pages: number, items: number)
    readonly current: number;
    readonly items: number;
    readonly pages: number;
    component1(): number;
    component2(): number;
    component3(): number;
    copy(current: number, pages: number, items: number): Pagination;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}