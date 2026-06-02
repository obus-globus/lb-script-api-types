import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UCaseProps$ContextIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UCaseProps$ContextIterator.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class UCaseProps extends Object {
    static INSTANCE: UCaseProps;
    static LOC_DUTCH: number;
    static LOC_ROOT: number;
    static LOWER: number;
    static MAX_STRING_LENGTH: number;
    static NONE: number;
    static TITLE: number;
    static TYPE_MASK: number;
    static UPPER: number;
    static dummyStringBuilder: StringBuilder;
    static getCaseLocale(paramlocale: Locale): number;
    static getCaseLocale(paramlocale: ULocale): number;
    private constructor()
    // private exceptions: string;
    // private indexes: number[];
    // private trie: (Object | null)[];
    // private unfold: string[];
    addCaseClosure(c: number, set: string[]): void;
    addPropertyStarts(set: string[]): void;
    addSimpleCaseClosure(c: number, set: string[]): void;
    addStringCaseClosure(s: string, set: string[]): boolean;
    fold(c: number, options: number): number;
    getDotType(c: number): number;
    // private getSlotValue(excWord: number, index: number, excOffset: number): number;
    // private getSlotValueAndOffset(excWord: number, index: number, excOffset: number): number;
    getType(c: number): number;
    getTypeOrIgnorable(c: number): number;
    hasBinaryProperty(c: number, which: number): boolean;
    isCaseSensitive(c: number): boolean;
    // private isFollowedByCasedLetter(iter: UCaseProps$ContextIterator, dir: number): boolean;
    // private isFollowedByDotAbove(iter: UCaseProps$ContextIterator): boolean;
    // private isFollowedByMoreAbove(iter: UCaseProps$ContextIterator): boolean;
    // private isPrecededBySoftDotted(iter: UCaseProps$ContextIterator): boolean;
    // private isPrecededBy_I(iter: UCaseProps$ContextIterator): boolean;
    isSoftDotted(c: number): boolean;
    // private readData(bytes: ByteBuffer): void;
    // private strcmpMax(s: string, unfoldOffset: number, max: number): number;
    toFullFolding(c: number, out: Appendable, options: number): number;
    toFullLower(c: number, iter: UCaseProps$ContextIterator, out: Appendable, caseLocale: number): number;
    toFullTitle(c: number, iter: UCaseProps$ContextIterator, out: Appendable, caseLocale: number): number;
    toFullUpper(c: number, iter: UCaseProps$ContextIterator, out: Appendable, caseLocale: number): number;
    // private toUpperOrTitle(c: number, iter: UCaseProps$ContextIterator, out: Appendable, loc: number, upperNotTitle: boolean): number;
    tolower(c: number): number;
    totitle(c: number): number;
    toupper(c: number): number;
}