import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Validate extends Object {
    static exclusiveBetween(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Comparable<Object>): void;
    static exclusiveBetween(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Comparable<Object>, paramarg3: string, ...paramarg4: (Object | null)[]): void;
    static exclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static exclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: string): void;
    static exclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static exclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: string): void;
    static finite(paramarg0: number): void;
    static finite(paramarg0: number, paramarg1: string, ...paramarg2: (Object | null)[]): void;
    static inclusiveBetween(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Comparable<Object>): void;
    static inclusiveBetween(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Comparable<Object>, paramarg3: string, ...paramarg4: (Object | null)[]): void;
    static inclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static inclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: string): void;
    static inclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static inclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: string): void;
    static isAssignableFrom(paramarg0: Class<Object>, paramarg1: Class<Object>): void;
    static isAssignableFrom(paramarg0: Class<Object>, paramarg1: Class<Object>, paramarg2: string, ...paramarg3: (Object | null)[]): void;
    static isInstanceOf(paramarg0: Class<Object>, paramarg1: Object): void;
    static isInstanceOf(paramarg0: Class<Object>, paramarg1: Object, paramarg2: string, ...paramarg3: (Object | null)[]): void;
    static isTrue(paramarg0: boolean): void;
    static isTrue(paramarg0: boolean, paramarg1: string, paramarg2: number): void;
    static isTrue(paramarg0: boolean, paramarg1: string, ...paramarg2: (Object | null)[]): void;
    static isTrue(paramarg0: boolean, paramarg1: string, paramarg2: number): void;
    static isTrue(paramarg0: boolean, paramarg1: () => string): void;
    static matchesPattern(paramarg0: CharSequence, paramarg1: string): void;
    static matchesPattern(paramarg0: CharSequence, paramarg1: string, paramarg2: string, ...paramarg3: (Object | null)[]): void;
    static noNullElements(paramarg0: Object | null): Object | null;
    static noNullElements(paramarg0: Object | null, paramarg1: string, ...paramarg2: (Object | null)[]): Object | null;
    static noNullElements(paramarg0: Object | null): Object | null;
    static noNullElements(paramarg0: Object | null, paramarg1: string, ...paramarg2: (Object | null)[]): Object | null;
    static notBlank(paramarg0: CharSequence | null): CharSequence | null;
    static notBlank(paramarg0: CharSequence | null, paramarg1: string, ...paramarg2: (Object | null)[]): CharSequence | null;
    static notEmpty(paramarg0: CharSequence | null): CharSequence | null;
    static notEmpty(paramarg0: CharSequence | null, paramarg1: string, ...paramarg2: (Object | null)[]): CharSequence | null;
    static notEmpty(paramarg0: Object | null): Object | null;
    static notEmpty(paramarg0: Object | null, paramarg1: string, ...paramarg2: (Object | null)[]): Object | null;
    static notEmpty(paramarg0: Object | null): Object | null;
    static notEmpty(paramarg0: Object | null, paramarg1: string, ...paramarg2: (Object | null)[]): Object | null;
    static notEmpty(paramarg0: Object | null): Object | null;
    static notEmpty(paramarg0: Object | null, paramarg1: string, ...paramarg2: (Object | null)[]): Object | null;
    static notNaN(paramarg0: number): void;
    static notNaN(paramarg0: number, paramarg1: string, ...paramarg2: (Object | null)[]): void;
    static notNull(paramarg0: Object | null): Object | null;
    static notNull(paramarg0: Object | null, paramarg1: string, ...paramarg2: (Object | null)[]): Object | null;
    static validIndex(paramarg0: CharSequence | null, paramarg1: number): CharSequence | null;
    static validIndex(paramarg0: CharSequence | null, paramarg1: number, paramarg2: string, ...paramarg3: (Object | null)[]): CharSequence | null;
    static validIndex(paramarg0: Object | null, paramarg1: number): Object | null;
    static validIndex(paramarg0: Object | null, paramarg1: number, paramarg2: string, ...paramarg3: (Object | null)[]): Object | null;
    static validIndex(paramarg0: Object | null, paramarg1: number): Object | null;
    static validIndex(paramarg0: Object | null, paramarg1: number, paramarg2: string, ...paramarg3: (Object | null)[]): Object | null;
    static validState(paramarg0: boolean): void;
    static validState(paramarg0: boolean, paramarg1: string, ...paramarg2: (Object | null)[]): void;
    constructor()
}