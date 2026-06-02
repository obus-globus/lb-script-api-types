import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceSectionFilter$IndexRange extends Object {
    static between(paramstartIndex: number, paramendIndex: number): SourceSectionFilter$IndexRange;
    static byLength(paramstartIndex: number, paramlength: number): SourceSectionFilter$IndexRange;
    constructor(startIndex: number, endIndex: number)
    // private endIndex: number;
    // private startIndex: number;
    contains(otherStartIndex: number, otherEndIndex: number): boolean;
    toString(): string;
}