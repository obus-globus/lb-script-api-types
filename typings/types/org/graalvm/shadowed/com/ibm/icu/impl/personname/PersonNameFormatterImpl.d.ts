import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ICUResourceBundle } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { PersonNamePattern } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/PersonNamePattern.d.ts'
import type { PersonName } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName.d.ts'
import type { PersonNameFormatter$DisplayOrder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$DisplayOrder.d.ts'
import type { PersonNameFormatter$Formality } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$Formality.d.ts'
import type { PersonNameFormatter$Length } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$Length.d.ts'
import type { PersonNameFormatter$Usage } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$Usage.d.ts'
export class PersonNameFormatterImpl extends Object {
    constructor(locale: Locale, gnFirstPatterns: string[], snFirstPatterns: string[], gnFirstLocales: string[], snFirstLocales: string[])
    constructor(locale: Locale, length: PersonNameFormatter$Length, usage: PersonNameFormatter$Usage, formality: PersonNameFormatter$Formality, displayOrder: PersonNameFormatter$DisplayOrder, surnameAllCaps: boolean)
    // private capitalizeSurname: boolean;
    readonly displayOrder: PersonNameFormatter$DisplayOrder;
    // private foreignSpaceReplacement: string;
    readonly formality: PersonNameFormatter$Formality;
    // private gnFirstLocales: string[];
    // private gnFirstPatterns: PersonNamePattern[];
    readonly initialPattern: string;
    readonly initialSequencePattern: string;
    readonly length: PersonNameFormatter$Length;
    readonly locale: Locale;
    // private nativeSpaceReplacement: string;
    // private snFirstLocales: string[];
    // private snFirstPatterns: PersonNamePattern[];
    readonly usage: PersonNameFormatter$Usage;
    // private asStringArray(resource: ICUResourceBundle): string[];
    formatToString(name: PersonName): string;
    // private formattingLocaleExists(formattingLocale: Locale): boolean;
    // private getBestPattern(patterns: PersonNamePattern[], name: PersonName): PersonNamePattern;
    getDisplayOrder(): PersonNameFormatter$DisplayOrder;
    getFormality(): PersonNameFormatter$Formality;
    getInitialPattern(): string;
    getInitialSequencePattern(): string;
    getLength(): PersonNameFormatter$Length;
    getLocale(): Locale;
    // private getNameLocale(name: PersonName): Locale;
    // private getNameScript(name: PersonName): string;
    getSurnameAllCaps(): boolean;
    getUsage(): PersonNameFormatter$Usage;
    // private localesMatch(nameLocale: Locale, formatterLocale: Locale): boolean;
    // private nameIsGnFirst(name: PersonName): boolean;
    // private nameScriptMatchesLocale(nameScriptID: string, formatterLocale: Locale): boolean;
    // private newLocaleWithScript(oldLocale: Locale, scriptCode: string, regionCode: string): Locale;
    shouldCapitalizeSurname(): boolean;
    toString(): string;
}