import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enumeration } from '../../../../../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { StringTransform } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringTransform.d.ts'
import type { Transliterator$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator$Factory.d.ts'
import type { Transliterator$Position } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator$Position.d.ts'
import type { UnicodeFilter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeFilter.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class Transliterator extends Object implements StringTransform {
    static FORWARD: number;
    static REVERSE: number;
    static createFromRules(paramID: string, paramrules: string, paramdir: number): Transliterator;
    static getAvailableIDs(): Enumeration<string>;
    static getAvailableSources(): Enumeration<string>;
    static getAvailableTargets(paramsource: string): Enumeration<string>;
    static getAvailableVariants(paramsource: string, paramtarget: string): Enumeration<string>;
    static getDisplayName(paramID: string): string;
    static getDisplayName(paramid: string, paraminLocale: Locale): string;
    static getDisplayName(paramid: string, paraminLocale: ULocale): string;
    static getInstance(paramID: string): Transliterator;
    static getInstance(paramID: string, paramdir: number): Transliterator;
    static registerAlias(paramaliasID: string, paramrealID: string): void;
    static registerAny(): void;
    static registerClass(paramID: string, paramtransClass: Class<Object>, paramdisplayName: string): void;
    static registerFactory(paramID: string, paramfactory: Transliterator$Factory): void;
    static registerInstance(paramtrans: Transliterator): void;
    static unregister(paramID: string): void;
    constructor(ID: string, filter: UnicodeFilter)
    readonly ID: string;
    readonly filter: string[];
    readonly maximumContextLength: number;
    addSourceTargetSet(inputFilter: string[], sourceSet: string[], targetSet: string[]): void;
    baseToRules(escapeUnprintable: boolean): string;
    filteredTransliterate(text: Replaceable, index: Transliterator$Position, incremental: boolean): void;
    // private filteredTransliterate(text: Replaceable, index: Transliterator$Position, incremental: boolean, rollback: boolean): void;
    finishTransliteration(text: Replaceable, index: Transliterator$Position): void;
    getElements(): Transliterator[];
    getFilter(): UnicodeFilter;
    getFilterAsUnicodeSet(externalFilter: string[]): string[];
    getID(): string;
    getInverse(): Transliterator;
    getMaximumContextLength(): number;
    getSourceSet(): string[];
    getTargetSet(): string[];
    handleGetSourceSet(): string[];
    handleTransliterate(text: Replaceable, pos: Transliterator$Position, incremental: boolean): void;
    setFilter(filter: UnicodeFilter): void;
    setID(id: string): void;
    setMaximumContextLength(a: number): void;
    toRules(escapeUnprintable: boolean): string;
    transform(source: string): string;
    transliterate(text: string): string;
    transliterate(text: Replaceable): void;
    transliterate(text: Replaceable, start: number, limit: number): number;
    transliterate(text: Replaceable, index: Transliterator$Position): void;
    transliterate(text: Replaceable, index: Transliterator$Position, insertion: number): void;
    transliterate(text: Replaceable, index: Transliterator$Position, insertion: string): void;
}