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
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object) => boolean;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static getAvailableLocales(): (Object | null)[];
    static getInstance(paramarg0: Locale): Collator;
    static getInstance(): Collator;
    static naturalOrder(): (param0: Object) => boolean;
    static nullsFirst(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static nullsLast(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static reverseOrder(): (param0: Object) => boolean;
    constructor()
    // private decmp: number;
    readonly strength: number;
    clone(): Object;
    protected clone(): Object;
    compare(arg0: Object, arg1: Object): number;
    compare(arg0: string, arg1: string): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: string, arg1: string): boolean;
    getCollationKey(arg0: string): CollationKey;
    getDecomposition(): number;
    getStrength(): number;
    hashCode(): number;
    reversed(): (param0: Object) => boolean;
    setDecomposition(arg0: number): void;
    setStrength(arg0: number): void;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Object) => U): (param0: Object) => boolean;
    thenComparing<U extends Object | number | string | boolean>(arg0: (param0: Object) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: Object) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: Object) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: Object) => number): (param0: Object) => boolean;
}