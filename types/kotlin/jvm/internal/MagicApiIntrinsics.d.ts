import type { Object } from '../../../java/lang/Object.d.ts'
export class MagicApiIntrinsics extends Object {
    static anyMagicApiCall(paramarg0: number): Object | null;
    static anyMagicApiCall(paramarg0: number, paramarg1: Object, paramarg2: Object): Object | null;
    static anyMagicApiCall(paramarg0: number, paramarg1: Object, paramarg2: Object, paramarg3: Object, paramarg4: Object): Object | null;
    static anyMagicApiCall(paramarg0: number, paramarg1: number, paramarg2: Object): Object | null;
    static anyMagicApiCall(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: Object): Object | null;
    static anyMagicApiCall(paramarg0: Object): Object | null;
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