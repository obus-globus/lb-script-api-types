import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class KeySegmentQuery extends Object {
    constructor(prefix: string, typed: string, depth: number)
    readonly depth: number;
    readonly prefix: string;
    readonly typed: string;
    component1(): string;
    component2(): string;
    component3(): number;
    copy(prefix: string, typed: string, depth: number): KeySegmentQuery;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}