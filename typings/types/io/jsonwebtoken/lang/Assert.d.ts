import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class Assert extends Object {
    static doesNotContain(paramarg0: string, paramarg1: string): void;
    static doesNotContain(paramarg0: string, paramarg1: string, paramarg2: string): void;
    static eq<T extends Comparable<T>>(paramarg0: T, paramarg1: T, paramarg2: string): T;
    static gt<T extends Comparable<T>>(paramarg0: T, paramarg1: T, paramarg2: string): T;
    static hasLength(paramarg0: string): void;
    static hasLength(paramarg0: string, paramarg1: string): void;
    static hasText<T extends CharSequence>(paramarg0: T, paramarg1: string): T;
    static hasText(paramarg0: string): void;
    static isAssignable(paramarg0: Class<Object>, paramarg1: Class<Object>): void;
    static isAssignable(paramarg0: Class<Object>, paramarg1: Class<Object>, paramarg2: string): void;
    static isInstanceOf<T extends unknown>(paramarg0: Class<T>, paramarg1: Object): T;
    static isInstanceOf<T extends unknown>(paramarg0: Class<T>, paramarg1: Object, paramarg2: string): T;
    static isNull(paramarg0: Object): void;
    static isNull(paramarg0: Object, paramarg1: string): void;
    static isTrue(paramarg0: boolean): void;
    static isTrue(paramarg0: boolean, paramarg1: string): void;
    static lte<T extends Comparable<T>>(paramarg0: T, paramarg1: T, paramarg2: string): T;
    static noNullElements(paramarg0: Object[]): void;
    static noNullElements(paramarg0: Object[], paramarg1: string): void;
    static notEmpty<T extends Object[]>(paramarg0: T, paramarg1: string): T;
    static notEmpty<T extends JavaMap<Object, Object>>(paramarg0: T, paramarg1: string): T;
    static notEmpty(paramarg0: number[], paramarg1: string): number[];
    static notEmpty(paramarg0: string[], paramarg1: string): string[];
    static notEmpty(paramarg0: Object[], paramarg1: string): Object[];
    static notEmpty(paramarg0: Object[]): void;
    static notEmpty(paramarg0: JavaMap<Object | null, Object | null>): void;
    static notNull<T extends unknown>(paramarg0: T, paramarg1: string): T;
    static notNull(paramarg0: Object): void;
    static state(paramarg0: boolean): void;
    static state(paramarg0: boolean, paramarg1: string): void;
    static stateIsInstance<T extends unknown>(paramarg0: Class<T>, paramarg1: Object, paramarg2: string): T;
    static stateNotNull<T extends unknown>(paramarg0: T, paramarg1: string): T;
    private constructor()
}