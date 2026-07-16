import type { Object } from '../../../../java/lang/Object.d.ts'
export class Assert extends Object {
    static element(paramarg0: Object, paramarg1: Object): void;
    static notNull<T extends unknown>(paramarg0: T, paramarg1: string): T;
    static operation(paramarg0: boolean, paramarg1: string): void;
    static state(paramarg0: boolean, paramarg1: string, ...paramarg2: Object[]): void;
    private constructor()
}