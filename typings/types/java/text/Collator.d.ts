import type { CollationKey } from '../../java/text/CollationKey.d.ts'
import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Function } from '../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export abstract class Collator extends Object implements Comparator<Object>, Cloneable {
    static CANONICAL_DECOMPOSITION: number;
    static FULL_DECOMPOSITION: number;
    static IDENTICAL: number;
    static NO_DECOMPOSITION: number;
    static PRIMARY: number;
    static SECONDARY: number;
    static TERTIARY: number;
    static getAvailableLocales(): Locale[];
    static getInstance(paramarg0: Locale): Collator;
    static getInstance(): Collator;
    constructor()
    // private decmp: number;
    readonly strength: number;
    clone(): Object;
    compare(arg0: Object, arg1: Object): number;
    compare(arg0: string, arg1: string): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: string, arg1: string): boolean;
    getCollationKey(arg0: string): CollationKey;
    getDecomposition(): number;
    getStrength(): number;
    hashCode(): number;
    reversed(): (param0: Object, param1: Object) => number;
    setDecomposition(arg0: number): void;
    setStrength(arg0: number): void;
    thenComparing(arg0: (param0: Object, param1: Object) => number): (param0: Object, param1: Object) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Object) => U): (param0: Object, param1: Object) => number;
    thenComparing<U extends unknown>(arg0: (param0: Object) => U, arg1: (param0: U, param1: U) => number): (param0: Object, param1: Object) => number;
    thenComparingDouble(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
    thenComparingInt(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
    thenComparingLong(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
}