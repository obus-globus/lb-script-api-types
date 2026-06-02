import type { Object } from '../../../java/lang/Object.d.ts'
import type { Extension } from '../../../sun/util/locale/Extension.d.ts'
import type { InternalLocaleBuilder$CaseInsensitiveChar } from '../../../sun/util/locale/InternalLocaleBuilder$CaseInsensitiveChar.d.ts'
import type { InternalLocaleBuilder$CaseInsensitiveString } from '../../../sun/util/locale/InternalLocaleBuilder$CaseInsensitiveString.d.ts'
export class LocaleExtensions extends Object {
    static CALENDAR_JAPANESE: LocaleExtensions;
    static NUMBER_THAI: LocaleExtensions;
    static isValidKey(paramarg0: string): boolean;
    static isValidUnicodeLocaleKey(paramarg0: string): boolean;
    private constructor(arg0: string, arg1: string, arg2: Extension)
    constructor(arg0: Map<InternalLocaleBuilder$CaseInsensitiveChar, string>, arg1: InternalLocaleBuilder$CaseInsensitiveString[], arg2: Map<InternalLocaleBuilder$CaseInsensitiveString, string>)
    // private extensionMap: { [key: string]: Extension };
    // private id: string;
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