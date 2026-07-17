import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enumeration } from '../../../../../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { UCaseProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UCaseProps.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { SourceTargetUtility } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SourceTargetUtility.d.ts'
import type { Transliterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator.d.ts'
import type { Transliterator$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator$Factory.d.ts'
import type { Transliterator$Position } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator$Position.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class TitlecaseTransliterator extends Transliterator {
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
    constructor(loc: ULocale)
    // private caseLocale: number;
    // private csp: UCaseProps;
    // private locale: ULocale;
    // private sourceTargetUtility: SourceTargetUtility;
    addSourceTargetSet(inputFilter: string[], sourceSet: string[], targetSet: string[]): void;
    handleTransliterate(text: Replaceable, offsets: Transliterator$Position, isIncremental: boolean): void;
}