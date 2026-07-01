import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CollationIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationIterator.d.ts'
import type { UVector32 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/UVector32.d.ts'
import type { RuleBasedCollator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedCollator.d.ts'
import type { UCharacterIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UCharacterIterator.d.ts'
export class CollationElementIterator extends Object {
    static IGNORABLE: number;
    static NULLORDER: number;
    static primaryOrder(paramce: number): number;
    static secondaryOrder(paramce: number): number;
    static tertiaryOrder(paramce: number): number;
    constructor(source: CharacterIterator, collator: RuleBasedCollator)
    constructor(source: string, collator: RuleBasedCollator)
    constructor(source: UCharacterIterator, collator: RuleBasedCollator)
    // private dir_: number;
    // private iter_: CollationIterator;
    // private offsets_: UVector32;
    // private otherHalf_: number;
    // private rbc_: RuleBasedCollator;
    // private string_: string;
    equals(that: Object | null): boolean;
    getMaxExpansion(ce: number): number;
    getOffset(): number;
    getRuleBasedCollator(): RuleBasedCollator;
    hashCode(): number;
    next(): number;
    // private normalizeDir(): number;
    previous(): number;
    reset(): void;
    setOffset(newOffset: number): void;
    setText(source: CharacterIterator): void;
    setText(source: string): void;
    setText(source: UCharacterIterator): void;
}