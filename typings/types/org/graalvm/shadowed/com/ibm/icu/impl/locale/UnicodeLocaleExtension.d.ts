import type { Extension } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/Extension.d.ts'
export class UnicodeLocaleExtension extends Extension {
    static CA_JAPANESE: UnicodeLocaleExtension;
    static NU_THAI: UnicodeLocaleExtension;
    static SINGLETON: string;
    static isAttribute(params: string): boolean;
    static isKey(params: string): boolean;
    static isSingletonChar(paramc: string): boolean;
    static isType(params: string): boolean;
    static isTypeSubtag(params: string): boolean;
    constructor(attributes: string[], keywords: { [key: string]: string })
    // private _attributes: string[];
    // private _keywords: { [key: string]: string };
    getUnicodeLocaleAttributes(): string[];
    getUnicodeLocaleKeys(): string[];
    getUnicodeLocaleType(unicodeLocaleKey: string): string;
}