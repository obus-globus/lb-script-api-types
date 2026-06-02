import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class BaseLocale extends Object {
    static ROOT: BaseLocale;
    static SEP: string;
    static getInstance(paramlanguage: string, paramscript: string, paramregion: string, paramvariant: string): BaseLocale;
    private constructor(language: string, script: string, region: string, variant: string)
    // private _hash: number;
    // private _language: string;
    // private _region: string;
    // private _script: string;
    // private _variant: string;
    equals(obj: Object | null): boolean;
    getLanguage(): string;
    getRegion(): string;
    getScript(): string;
    getVariant(): string;
    hashCode(): number;
    toString(): string;
}