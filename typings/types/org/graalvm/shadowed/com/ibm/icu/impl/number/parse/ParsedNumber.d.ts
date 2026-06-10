import type { Comparator } from '../../../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../../../java/lang/Number.d.ts'
import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { DecimalQuantity_DualStorageBCD } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity_DualStorageBCD.d.ts'
export class ParsedNumber extends Object {
    static COMPARATOR: (param0: Object) => boolean;
    static FLAG_FAIL: number;
    static FLAG_HAS_DECIMAL_SEPARATOR: number;
    static FLAG_HAS_EXPONENT: number;
    static FLAG_INFINITY: number;
    static FLAG_NAN: number;
    static FLAG_NEGATIVE: number;
    static FLAG_PERCENT: number;
    static FLAG_PERMILLE: number;
    constructor()
    charEnd: number;
    currencyCode: string;
    flags: number;
    prefix: string;
    quantity: DecimalQuantity_DualStorageBCD;
    suffix: string;
    clear(): void;
    copyFrom(other: ParsedNumber): void;
    getNumber(): Number;
    getNumber(parseFlags: number): Number;
    isBetterThan(other: ParsedNumber): boolean;
    postProcess(): void;
    seenNumber(): boolean;
    setCharsConsumed(segment: StringSegment): void;
    success(): boolean;
}