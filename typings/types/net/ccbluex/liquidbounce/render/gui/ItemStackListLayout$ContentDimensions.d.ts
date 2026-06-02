import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ItemStackListLayout$ContentDimensions extends Record {
    constructor(width: number, height: number)
    // private height: number;
    /*not mapped: */ height(): number;
    // private width: number;
    /*not mapped: */ width(): number;
    component1(): number;
    component2(): number;
    copy(width: number, height: number): ItemStackListLayout$ContentDimensions;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}