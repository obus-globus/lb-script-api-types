import type { Extension } from '../../../../../com/ibm/icu/impl/locale/Extension.d.ts'
export class UnicodeLocaleExtension extends Extension {
    static CA_JAPANESE: UnicodeLocaleExtension;
    static NU_THAI: UnicodeLocaleExtension;
    static SINGLETON: string;
    static isAttribute(paramarg0: string): boolean;
    static isKey(paramarg0: string): boolean;
    static isSingletonChar(paramarg0: string): boolean;
    static isType(paramarg0: string): boolean;
    static isTypeSubtag(paramarg0: string): boolean;
    constructor(arg0: string[], arg1: { [key: string]: string })
    // private _attributes: string[];
    // private _keywords: { [key: string]: string };
    getUnicodeLocaleAttributes(): string[];
    getUnicodeLocaleKeys(): string[];
    getUnicodeLocaleType(arg0: string): string;
}