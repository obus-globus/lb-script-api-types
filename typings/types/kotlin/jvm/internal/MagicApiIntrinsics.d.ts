import type { Object } from '../../../java/lang/Object.d.ts'
export class MagicApiIntrinsics extends Object {
    static anyMagicApiCall<T extends unknown>(paramarg0: number): T;
    static anyMagicApiCall<T extends unknown>(paramarg0: number, paramarg1: Object, paramarg2: Object): T;
    static anyMagicApiCall<T extends unknown>(paramarg0: number, paramarg1: Object, paramarg2: Object, paramarg3: Object, paramarg4: Object): T;
    static anyMagicApiCall<T extends unknown>(paramarg0: number, paramarg1: number, paramarg2: Object): T;
    static anyMagicApiCall<T extends unknown>(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: Object): T;
    static anyMagicApiCall<T extends unknown>(paramarg0: Object): T;
    static intMagicApiCall(paramarg0: number): number;
    static intMagicApiCall(paramarg0: number, paramarg1: Object, paramarg2: Object): number;
    static intMagicApiCall(paramarg0: number, paramarg1: Object, paramarg2: Object, paramarg3: Object, paramarg4: Object): number;
    static intMagicApiCall(paramarg0: number, paramarg1: number, paramarg2: Object): number;
    static intMagicApiCall(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: Object): number;
    static intMagicApiCall(paramarg0: Object): number;
    static voidMagicApiCall(paramarg0: number): void;
    static voidMagicApiCall(paramarg0: Object): void;
    constructor()
}