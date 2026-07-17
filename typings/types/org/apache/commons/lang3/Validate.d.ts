import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Validate extends Object {
    static exclusiveBetween<T extends unknown>(paramarg0: T, paramarg1: T, paramarg2: Comparable<T>): void;
    static exclusiveBetween<T extends unknown>(paramarg0: T, paramarg1: T, paramarg2: Comparable<T>, paramarg3: string, ...paramarg4: Object[]): void;
    static exclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static exclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: string): void;
    static finite(paramarg0: number): void;
    static finite(paramarg0: number, paramarg1: string, ...paramarg2: Object[]): void;
    static inclusiveBetween<T extends unknown>(paramarg0: T, paramarg1: T, paramarg2: Comparable<T>): void;
    static inclusiveBetween<T extends unknown>(paramarg0: T, paramarg1: T, paramarg2: Comparable<T>, paramarg3: string, ...paramarg4: Object[]): void;
    static inclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static inclusiveBetween(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: string): void;
    static isAssignableFrom(paramarg0: Class<Object>, paramarg1: Class<Object>): void;
    static isAssignableFrom(paramarg0: Class<Object>, paramarg1: Class<Object>, paramarg2: string, ...paramarg3: Object[]): void;
    static isInstanceOf(paramarg0: Class<Object>, paramarg1: Object): void;
    static isInstanceOf(paramarg0: Class<Object>, paramarg1: Object, paramarg2: string, ...paramarg3: Object[]): void;
    static isTrue(paramarg0: boolean): void;
    static isTrue(paramarg0: boolean, paramarg1: string, paramarg2: number): void;
    static isTrue(paramarg0: boolean, paramarg1: string, ...paramarg2: Object[]): void;
    static isTrue(paramarg0: boolean, paramarg1: () => string): void;
    static matchesPattern(paramarg0: CharSequence, paramarg1: string): void;
    static matchesPattern(paramarg0: CharSequence, paramarg1: string, paramarg2: string, ...paramarg3: Object[]): void;
    static noNullElements<T extends Object[]>(paramarg0: T): T;
    static noNullElements<T extends Object[]>(paramarg0: T, paramarg1: string, ...paramarg2: Object[]): T;
    static noNullElements<T extends unknown>(paramarg0: T[]): T[];
    static noNullElements<T extends unknown>(paramarg0: T[], paramarg1: string, ...paramarg2: Object[]): T[];
    static notBlank<T extends CharSequence>(paramarg0: T): T;
    static notBlank<T extends CharSequence>(paramarg0: T, paramarg1: string, ...paramarg2: Object[]): T;
    static notEmpty<T extends CharSequence>(paramarg0: T): T;
    static notEmpty<T extends CharSequence>(paramarg0: T, paramarg1: string, ...paramarg2: Object[]): T;
    static notEmpty<T extends Object[]>(paramarg0: T): T;
    static notEmpty<T extends Object[]>(paramarg0: T, paramarg1: string, ...paramarg2: Object[]): T;
    static notEmpty<T extends JavaMap<Object, Object>>(paramarg0: T): T;
    static notEmpty<T extends JavaMap<Object, Object>>(paramarg0: T, paramarg1: string, ...paramarg2: Object[]): T;
    static notEmpty<T extends unknown>(paramarg0: T[]): T[];
    static notEmpty<T extends unknown>(paramarg0: T[], paramarg1: string, ...paramarg2: Object[]): T[];
    static notNaN(paramarg0: number): void;
    static notNaN(paramarg0: number, paramarg1: string, ...paramarg2: Object[]): void;
    static notNull<T extends unknown>(paramarg0: T): T;
    static notNull<T extends unknown>(paramarg0: T, paramarg1: string, ...paramarg2: Object[]): T;
    static validIndex<T extends CharSequence>(paramarg0: T, paramarg1: number): T;
    static validIndex<T extends CharSequence>(paramarg0: T, paramarg1: number, paramarg2: string, ...paramarg3: Object[]): T;
    static validIndex<T extends Object[]>(paramarg0: T, paramarg1: number): T;
    static validIndex<T extends Object[]>(paramarg0: T, paramarg1: number, paramarg2: string, ...paramarg3: Object[]): T;
    static validIndex<T extends unknown>(paramarg0: T[], paramarg1: number): T[];
    static validIndex<T extends unknown>(paramarg0: T[], paramarg1: number, paramarg2: string, ...paramarg3: Object[]): T[];
    static validState(paramarg0: boolean): void;
    static validState(paramarg0: boolean, paramarg1: string, ...paramarg2: Object[]): void;
    constructor()
}