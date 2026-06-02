import type { UCaseProps$ContextIterator } from '../../../../com/ibm/icu/impl/UCaseProps$ContextIterator.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    static getCaseLocale(paramarg0: ULocale): number;
    static getCaseLocale(paramarg0: Locale): number;
    private constructor()
    // private exceptions: string;
    // private indexes: number[];
    // private trie: (Object | null)[];
    // private unfold: string[];
    addCaseClosure(arg0: number, arg1: string[]): void;
    addPropertyStarts(arg0: string[]): void;
    addSimpleCaseClosure(arg0: number, arg1: string[]): void;
    addStringCaseClosure(arg0: string, arg1: string[]): boolean;
    fold(arg0: number, arg1: number): number;
    getDotType(arg0: number): number;
    // private getSlotValue(arg0: number, arg1: number, arg2: number): number;
    // private getSlotValueAndOffset(arg0: number, arg1: number, arg2: number): number;
    getType(arg0: number): number;
    getTypeOrIgnorable(arg0: number): number;
    hasBinaryProperty(arg0: number, arg1: number): boolean;
    isCaseSensitive(arg0: number): boolean;
    // private isFollowedByCasedLetter(arg0: UCaseProps$ContextIterator, arg1: number): boolean;
    // private isFollowedByDotAbove(arg0: UCaseProps$ContextIterator): boolean;
    // private isFollowedByMoreAbove(arg0: UCaseProps$ContextIterator): boolean;
    // private isPrecededBySoftDotted(arg0: UCaseProps$ContextIterator): boolean;
    // private isPrecededBy_I(arg0: UCaseProps$ContextIterator): boolean;
    isSoftDotted(arg0: number): boolean;
    // private readData(arg0: ByteBuffer): void;
    // private strcmpMax(arg0: string, arg1: number, arg2: number): number;
    toFullFolding(arg0: number, arg1: Appendable, arg2: number): number;
    toFullLower(arg0: number, arg1: UCaseProps$ContextIterator, arg2: Appendable, arg3: number): number;
    toFullTitle(arg0: number, arg1: UCaseProps$ContextIterator, arg2: Appendable, arg3: number): number;
    toFullUpper(arg0: number, arg1: UCaseProps$ContextIterator, arg2: Appendable, arg3: number): number;
    // private toUpperOrTitle(arg0: number, arg1: UCaseProps$ContextIterator, arg2: Appendable, arg3: number, arg4: boolean): number;
    tolower(arg0: number): number;
    totitle(arg0: number): number;
    toupper(arg0: number): number;
}