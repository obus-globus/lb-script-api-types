import type { ICUResourceBundle } from '../../../../../com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { PersonNamePattern } from '../../../../../com/ibm/icu/impl/personname/PersonNamePattern.d.ts'
import type { PersonName } from '../../../../../com/ibm/icu/text/PersonName.d.ts'
import type { PersonNameFormatter$DisplayOrder } from '../../../../../com/ibm/icu/text/PersonNameFormatter$DisplayOrder.d.ts'
import type { PersonNameFormatter$Formality } from '../../../../../com/ibm/icu/text/PersonNameFormatter$Formality.d.ts'
import type { PersonNameFormatter$Length } from '../../../../../com/ibm/icu/text/PersonNameFormatter$Length.d.ts'
import type { PersonNameFormatter$Usage } from '../../../../../com/ibm/icu/text/PersonNameFormatter$Usage.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PersonNameFormatterImpl extends Object {
    constructor(arg0: Locale, arg1: PersonNameFormatter$Length, arg2: PersonNameFormatter$Usage, arg3: PersonNameFormatter$Formality, arg4: PersonNameFormatter$DisplayOrder, arg5: boolean)
    constructor(arg0: Locale, arg1: string[], arg2: string[], arg3: string[], arg4: string[])
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
    // private asStringArray(arg0: ICUResourceBundle): string[];
    formatToString(arg0: PersonName): string;
    // private formattingLocaleExists(arg0: Locale): boolean;
    // private getBestPattern(arg0: PersonNamePattern[], arg1: PersonName): PersonNamePattern;
    getDisplayOrder(): PersonNameFormatter$DisplayOrder;
    getFormality(): PersonNameFormatter$Formality;
    getInitialPattern(): string;
    getInitialSequencePattern(): string;
    getLength(): PersonNameFormatter$Length;
    getLocale(): Locale;
    // private getNameLocale(arg0: PersonName): Locale;
    // private getNameScript(arg0: PersonName): string;
    getSurnameAllCaps(): boolean;
    getUsage(): PersonNameFormatter$Usage;
    // private localesMatch(arg0: Locale, arg1: Locale): boolean;
    // private nameIsGnFirst(arg0: PersonName): boolean;
    // private nameScriptMatchesLocale(arg0: string, arg1: Locale): boolean;
    // private newLocaleWithScript(arg0: Locale, arg1: string, arg2: string): Locale;
    shouldCapitalizeSurname(): boolean;
    toString(): string;
}