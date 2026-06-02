import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Extension } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/Extension.d.ts'
import type { InternalLocaleBuilder$CaseInsensitiveChar } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/InternalLocaleBuilder$CaseInsensitiveChar.d.ts'
import type { InternalLocaleBuilder$CaseInsensitiveString } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/InternalLocaleBuilder$CaseInsensitiveString.d.ts'
export class LocaleExtensions extends Object {
    static CALENDAR_JAPANESE: LocaleExtensions;
    static EMPTY_EXTENSIONS: LocaleExtensions;
    static NUMBER_THAI: LocaleExtensions;
    static isValidKey(paramc: string): boolean;
    static isValidUnicodeLocaleKey(paramukey: string): boolean;
    private constructor()
    constructor(extensions: Map<InternalLocaleBuilder$CaseInsensitiveChar, string>, uattributes: InternalLocaleBuilder$CaseInsensitiveString[], ukeywords: Map<InternalLocaleBuilder$CaseInsensitiveString, string>)
    // private _id: string;
    // private _map: { [key: string]: Extension };
    equals(other: Object | null): boolean;
    getExtension(key: string): Extension;
    getExtensionValue(key: string): string;
    getID(): string;
    getKeys(): string[];
    getUnicodeLocaleAttributes(): string[];
    getUnicodeLocaleKeys(): string[];
    getUnicodeLocaleType(unicodeLocaleKey: string): string;
    hashCode(): number;
    isEmpty(): boolean;
    toString(): string;
}