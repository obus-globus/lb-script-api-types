import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { Collator } from '../../../../../../../java/text/Collator.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
export class AlphanumericComparator extends Object implements Comparator<CharSequence> {
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object) => boolean;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static naturalOrder(): (param0: Object) => boolean;
    static nullsFirst(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static nullsLast(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static reverseOrder(): (param0: Object) => boolean;
    constructor()
    constructor(arg0: Collator)
    constructor(arg0: Locale)
    // private collator: Collator;
    // private compare(arg0: CharBuffer, arg1: CharBuffer): number;
    compare(arg0: CharSequence, arg1: CharSequence): number;
    // private compareAsStrings(arg0: CharBuffer, arg1: CharBuffer): number;
    // private compareNumerically(arg0: CharBuffer, arg1: CharBuffer): number;
    // private isDigit(arg0: string): boolean;
    // private isNumerical(arg0: CharBuffer): boolean;
    // private isZero(arg0: string): boolean;
    // private moveWindow(arg0: CharBuffer): void;
    // private prepareForNextIteration(arg0: CharBuffer): void;
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: CharSequence) => U): (param0: Object) => boolean;
    thenComparing<U extends Object | number | string | boolean>(arg0: (param0: CharSequence) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: CharSequence) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: CharSequence) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: CharSequence) => number): (param0: Object) => boolean;
}