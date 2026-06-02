import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BaseLocale extends Object {
    static ROOT: BaseLocale;
    static SEP: string;
    static getInstance(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): BaseLocale;
    private constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    // private _hash: number;
    // private _language: string;
    // private _region: string;
    // private _script: string;
    // private _variant: string;
    equals(arg0: Object | null): boolean;
    getLanguage(): string;
    getRegion(): string;
    getScript(): string;
    getVariant(): string;
    hashCode(): number;
    toString(): string;
}