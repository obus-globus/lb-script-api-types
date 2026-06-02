import type { Object } from '../../../java/lang/Object.d.ts'
export class KDocSource$Source extends Object {
    constructor(file: string, line: number)
    readonly file: string;
    readonly line: number;
    component1(): string;
    component2(): number;
    copy(file: string, line: number): KDocSource$Source;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}