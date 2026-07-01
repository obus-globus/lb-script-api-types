import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enumeration } from '../../../../../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { Transliterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator.d.ts'
import type { Transliterator$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator$Factory.d.ts'
import type { Transliterator$Position } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator$Position.d.ts'
import type { UnicodeFilter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeFilter.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class AnyTransliterator extends Transliterator {
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
    static registerClass(paramID: string, paramtransClass: Class<Transliterator>, paramdisplayName: string): void;
    static registerFactory(paramID: string, paramfactory: Transliterator$Factory): void;
    static registerInstance(paramtrans: Transliterator): void;
    static unregister(paramID: string): void;
    constructor(id: string, filter: UnicodeFilter, target2: string, targetScript2: number, widthFix2: Transliterator, cache2: { [key: number]: Transliterator })
    // private cache: { [key: number]: Transliterator };
    // private target: string;
    // private targetScript: number;
    addSourceTargetSet(inputFilter: string[], sourceSet: string[], targetSet: string[]): void;
    // private getTransliterator(source: number): Transliterator;
    handleTransliterate(text: Replaceable, pos: Transliterator$Position, isIncremental: boolean): void;
    // private isWide(script: number): boolean;
    safeClone(): Transliterator;
}