import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { Transliterator } from '../../../../com/ibm/icu/text/Transliterator.d.ts'
import type { Transliterator$Factory } from '../../../../com/ibm/icu/text/Transliterator$Factory.d.ts'
import type { Transliterator$Position } from '../../../../com/ibm/icu/text/Transliterator$Position.d.ts'
import type { UnicodeFilter } from '../../../../com/ibm/icu/text/UnicodeFilter.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
export class UnicodeNameTransliterator extends Transliterator {
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
    static registerClass(paramarg0: string, paramarg1: Class<Transliterator>, paramarg2: string): void;
    static registerFactory(paramarg0: string, paramarg1: Transliterator$Factory): void;
    static registerInstance(paramarg0: Transliterator): void;
    static unregister(paramarg0: string): void;
    constructor(arg0: UnicodeFilter)
    addSourceTargetSet(arg0: string[], arg1: string[], arg2: string[]): void;
    handleTransliterate(arg0: Replaceable, arg1: Transliterator$Position, arg2: boolean): void;
}