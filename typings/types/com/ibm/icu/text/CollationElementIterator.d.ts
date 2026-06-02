import type { CollationIterator } from '../../../../com/ibm/icu/impl/coll/CollationIterator.d.ts'
import type { UVector32 } from '../../../../com/ibm/icu/impl/coll/UVector32.d.ts'
import type { RuleBasedCollator } from '../../../../com/ibm/icu/text/RuleBasedCollator.d.ts'
import type { UCharacterIterator } from '../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollationElementIterator extends Object {
    static IGNORABLE: number;
    static NULLORDER: number;
    static primaryOrder(paramarg0: number): number;
    static secondaryOrder(paramarg0: number): number;
    static tertiaryOrder(paramarg0: number): number;
    private constructor(arg0: RuleBasedCollator)
    constructor(arg0: UCharacterIterator, arg1: RuleBasedCollator)
    constructor(arg0: CharacterIterator, arg1: RuleBasedCollator)
    constructor(arg0: string, arg1: RuleBasedCollator)
    // private dir_: number;
    // private iter_: CollationIterator;
    // private offsets_: UVector32;
    // private otherHalf_: number;
    // private rbc_: RuleBasedCollator;
    // private string_: string;
    equals(arg0: Object | null): boolean;
    getMaxExpansion(arg0: number): number;
    getOffset(): number;
    getRuleBasedCollator(): RuleBasedCollator;
    hashCode(): number;
    next(): number;
    // private normalizeDir(): number;
    previous(): number;
    reset(): void;
    setOffset(arg0: number): void;
    setText(arg0: UCharacterIterator): void;
    setText(arg0: CharacterIterator): void;
    setText(arg0: string): void;
}