import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GlyphLayoutInfo extends Record {
    constructor(useHorizontalBaseline: boolean, advanceX: number, advanceY: number)
    // private advanceX: number;
    /*not mapped: */ advanceX(): number;
    // private advanceY: number;
    /*not mapped: */ advanceY(): number;
    // private useHorizontalBaseline: boolean;
    /*not mapped: */ useHorizontalBaseline(): boolean;
    component1(): boolean;
    component2(): number;
    component3(): number;
    copy(useHorizontalBaseline: boolean, advanceX: number, advanceY: number): GlyphLayoutInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}