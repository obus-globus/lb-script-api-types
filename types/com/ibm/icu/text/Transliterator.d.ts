import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { StringTransform } from '../../../../com/ibm/icu/text/StringTransform.d.ts'
import type { Transliterator$Factory } from '../../../../com/ibm/icu/text/Transliterator$Factory.d.ts'
import type { Transliterator$Position } from '../../../../com/ibm/icu/text/Transliterator$Position.d.ts'
import type { UnicodeFilter } from '../../../../com/ibm/icu/text/UnicodeFilter.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Transliterator extends Object implements StringTransform {
    static FORWARD: number;
    static REVERSE: number;
    static createFromRules(paramarg0: string, paramarg1: string, paramarg2: number): Transliterator;
    static getAvailableIDs(): Enumeration<string>;
    static getAvailableSources(): Enumeration<string>;
    static getAvailableTargets(paramarg0: string): Enumeration<string>;
    static getAvailableVariants(paramarg0: string, paramarg1: string): Enumeration<string>;
    static getDisplayName(paramarg0: string): string;
    static getDisplayName(paramarg0: string, paramarg1: ULocale): string;
    static getDisplayName(paramarg0: string, paramarg1: Locale): string;
    static getInstance(paramarg0: string, paramarg1: number): Transliterator;
    static getInstance(paramarg0: string): Transliterator;
    static registerAlias(paramarg0: string, paramarg1: string): void;
    static registerAny(): void;
    static registerClass(paramarg0: string, paramarg1: Class<Object>, paramarg2: string): void;
    static registerFactory(paramarg0: string, paramarg1: Transliterator$Factory): void;
    static registerInstance(paramarg0: Transliterator): void;
    static unregister(paramarg0: string): void;
    constructor(arg0: string, arg1: UnicodeFilter)
    readonly ID: string;
    readonly filter: string[];
    readonly maximumContextLength: number;
    addSourceTargetSet(arg0: string[], arg1: string[], arg2: string[]): void;
    baseToRules(arg0: boolean): string;
    filteredTransliterate(arg0: Replaceable, arg1: Transliterator$Position, arg2: boolean): void;
    // private filteredTransliterate(arg0: Replaceable, arg1: Transliterator$Position, arg2: boolean, arg3: boolean): void;
    finishTransliteration(arg0: Replaceable, arg1: Transliterator$Position): void;
    getElements(): Transliterator[];
    getFilter(): UnicodeFilter;
    getFilterAsUnicodeSet(arg0: string[]): string[];
    getID(): string;
    getInverse(): Transliterator;
    getMaximumContextLength(): number;
    getSourceSet(): string[];
    getTargetSet(): string[];
    handleGetSourceSet(): string[];
    handleTransliterate(arg0: Replaceable, arg1: Transliterator$Position, arg2: boolean): void;
    setFilter(arg0: UnicodeFilter): void;
    setID(arg0: string): void;
    setMaximumContextLength(arg0: number): void;
    toRules(arg0: boolean): string;
    transform(arg0: string): string;
    transliterate(arg0: Replaceable): void;
    transliterate(arg0: Replaceable, arg1: Transliterator$Position): void;
    transliterate(arg0: Replaceable, arg1: Transliterator$Position, arg2: number): void;
    transliterate(arg0: Replaceable, arg1: Transliterator$Position, arg2: string): void;
    transliterate(arg0: Replaceable, arg1: number, arg2: number): number;
    transliterate(arg0: string): string;
}