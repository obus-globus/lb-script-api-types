import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class ObjectUtil extends Object {
    static checkInRange(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: string): number;
    static checkNonEmpty<K extends unknown, V extends unknown, T extends Map<K, V>>(paramarg0: T, paramarg1: string): T;
    static checkNonEmpty<T extends Object[]>(paramarg0: T, paramarg1: string): T;
    static checkNonEmpty<T extends unknown>(paramarg0: T[], paramarg1: string): T[];
    static checkNonEmpty(paramarg0: number[], paramarg1: string): number[];
    static checkNonEmpty(paramarg0: string[], paramarg1: string): string[];
    static checkNonEmpty(paramarg0: CharSequence, paramarg1: string): CharSequence;
    static checkNonEmpty(paramarg0: string, paramarg1: string): string;
    static checkNonEmptyAfterTrim(paramarg0: string, paramarg1: string): string;
    static checkNotNull<T extends unknown>(paramarg0: T, paramarg1: string): T;
    static checkNotNullArrayParam<T extends unknown>(paramarg0: T, paramarg1: number, paramarg2: string): T;
    static checkNotNullWithIAE<T extends unknown>(paramarg0: T, paramarg1: string): T;
    static checkPositive(paramarg0: number, paramarg1: string): number;
    static checkPositiveOrZero(paramarg0: number, paramarg1: string): number;
    static deepCheckNotNull<T extends unknown>(paramarg0: string, ...paramarg1: T[]): T[];
    static intValue(paramarg0: number, paramarg1: number): number;
    static longValue(paramarg0: number, paramarg1: number): number;
    private constructor()
}