import type { Extension } from '../../../../../com/ibm/icu/impl/locale/Extension.d.ts'
import type { InternalLocaleBuilder$CaseInsensitiveChar } from '../../../../../com/ibm/icu/impl/locale/InternalLocaleBuilder$CaseInsensitiveChar.d.ts'
import type { InternalLocaleBuilder$CaseInsensitiveString } from '../../../../../com/ibm/icu/impl/locale/InternalLocaleBuilder$CaseInsensitiveString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LocaleExtensions extends Object {
    static CALENDAR_JAPANESE: LocaleExtensions;
    static EMPTY_EXTENSIONS: LocaleExtensions;
    static NUMBER_THAI: LocaleExtensions;
    static isValidKey(paramarg0: string): boolean;
    static isValidUnicodeLocaleKey(paramarg0: string): boolean;
    private constructor()
    constructor(arg0: Map<InternalLocaleBuilder$CaseInsensitiveChar, string>, arg1: InternalLocaleBuilder$CaseInsensitiveString[], arg2: Map<InternalLocaleBuilder$CaseInsensitiveString, string>)
    // private _id: string;
    // private _map: { [key: string]: Extension };
    equals(arg0: Object | null): boolean;
    getExtension(arg0: string): Extension;
    getExtensionValue(arg0: string): string;
    getID(): string;
    getKeys(): string[];
    getUnicodeLocaleAttributes(): string[];
    getUnicodeLocaleKeys(): string[];
    getUnicodeLocaleType(arg0: string): string;
    hashCode(): number;
    isEmpty(): boolean;
    toString(): string;
}