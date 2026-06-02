import type { DictionaryMatcher } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryMatcher.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DictionaryData extends Object {
    static IX_COUNT: number;
    static IX_RESERVED1_OFFSET: number;
    static IX_RESERVED2_OFFSET: number;
    static IX_RESERVED6: number;
    static IX_RESERVED7: number;
    static IX_STRING_TRIE_OFFSET: number;
    static IX_TOTAL_SIZE: number;
    static IX_TRANSFORM: number;
    static IX_TRIE_TYPE: number;
    static TRANSFORM_NONE: number;
    static TRANSFORM_OFFSET_MASK: number;
    static TRANSFORM_TYPE_MASK: number;
    static TRANSFORM_TYPE_OFFSET: number;
    static TRIE_HAS_VALUES: number;
    static TRIE_TYPE_BYTES: number;
    static TRIE_TYPE_MASK: number;
    static TRIE_TYPE_UCHARS: number;
    static loadDictionaryFor(paramarg0: string): DictionaryMatcher;
    private constructor()
}