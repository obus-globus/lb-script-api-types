import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatWithAlpha extends Record {
    static CODEC: Codec<FloatWithAlpha>;
    constructor(value: number)
    constructor(value: number, alpha: number)
    // private alpha: number;
    // private value: number;
    alpha(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): number;
}