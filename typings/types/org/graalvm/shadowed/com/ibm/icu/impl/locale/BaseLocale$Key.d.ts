import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../java/lang/Comparable.d.ts'
export class BaseLocale$Key extends Object implements Comparable<BaseLocale$Key> {
    static normalize(paramkey: BaseLocale$Key): BaseLocale$Key;
    constructor(language: string, script: string, region: string, variant: string)
    // private _hash: number;
    // private _lang: string;
    // private _regn: string;
    // private _scrt: string;
    // private _vart: string;
    compareTo(other: BaseLocale$Key): number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}