import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Assert extends Object {
    static doesNotContain(paramarg0: string, paramarg1: string): void;
    static doesNotContain(paramarg0: string, paramarg1: string, paramarg2: string): void;
    static eq(paramarg0: Object | null, paramarg1: Object | null, paramarg2: string): Object | null;
    static gt(paramarg0: Object | null, paramarg1: Object | null, paramarg2: string): Object | null;
    static hasLength(paramarg0: string): void;
    static hasLength(paramarg0: string, paramarg1: string): void;
    static hasText(paramarg0: CharSequence | null, paramarg1: string): CharSequence | null;
    static hasText(paramarg0: string): void;
    static isAssignable(paramarg0: Class<Object>, paramarg1: Class<Object>): void;
    static isAssignable(paramarg0: Class<Object>, paramarg1: Class<Object>, paramarg2: string): void;
    static isInstanceOf(paramarg0: Class<Object>, paramarg1: Object): Object | null;
    static isInstanceOf(paramarg0: Class<Object>, paramarg1: Object, paramarg2: string): Object | null;
    static isNull(paramarg0: Object): void;
    static isNull(paramarg0: Object, paramarg1: string): void;
    static isTrue(paramarg0: boolean): void;
    static isTrue(paramarg0: boolean, paramarg1: string): void;
    static lte(paramarg0: Object | null, paramarg1: Object | null, paramarg2: string): Object | null;
    static noNullElements(paramarg0: (Object | null)[]): void;
    static noNullElements(paramarg0: (Object | null)[], paramarg1: string): void;
    static notEmpty(paramarg0: Object | null, paramarg1: string): Object | null;
    static notEmpty(paramarg0: Object | null, paramarg1: string): Object | null;
    static notEmpty(paramarg0: number[], paramarg1: string): number[];
    static notEmpty(paramarg0: string[], paramarg1: string): string[];
    static notEmpty(paramarg0: (Object | null)[], paramarg1: string): (Object | null)[];
    static notEmpty(paramarg0: (Object | null)[]): void;
    static notEmpty(paramarg0: Object[]): void;
    static notEmpty(paramarg0: Map<Object | null, Object | null>): void;
    static notNull(paramarg0: Object | null, paramarg1: string): Object | null;
    static notNull(paramarg0: Object): void;
    static state(paramarg0: boolean): void;
    static state(paramarg0: boolean, paramarg1: string): void;
    static stateIsInstance(paramarg0: Class<Object>, paramarg1: Object, paramarg2: string): Object | null;
    static stateNotNull(paramarg0: Object | null, paramarg1: string): Object | null;
    private constructor()
}