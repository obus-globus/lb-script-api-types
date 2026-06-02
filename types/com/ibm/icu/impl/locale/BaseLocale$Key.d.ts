import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class BaseLocale$Key extends Object implements Comparable<BaseLocale$Key> {
    static normalize(paramarg0: BaseLocale$Key): BaseLocale$Key;
    constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    // private _hash: number;
    // private _lang: string;
    // private _regn: string;
    // private _scrt: string;
    // private _vart: string;
    compareTo(arg0: BaseLocale$Key): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}