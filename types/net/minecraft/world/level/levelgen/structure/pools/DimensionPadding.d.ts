import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DimensionPadding extends Record {
    static CODEC: Codec<DimensionPadding>;
    static ZERO: DimensionPadding;
    // private bottom: number;
    // private top: number;
    bottom(): number;
    equals(o: Object | null): boolean;
    hasEqualTopAndBottom(): boolean;
    hashCode(): number;
    toString(): string;
    top(): number;
}