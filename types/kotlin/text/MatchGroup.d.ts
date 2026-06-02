import type { Object } from '../../java/lang/Object.d.ts'
export class MatchGroup extends Object {
    constructor(value: string, range: { start: number; endInclusive: number; step: number })
    readonly range: { start: number; endInclusive: number; step: number };
    readonly value: string;
    component1(): string;
    component2(): { start: number; endInclusive: number; step: number };
    copy(value: string, range: { start: number; endInclusive: number; step: number }): MatchGroup;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}