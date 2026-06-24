import type { PayloadTrie$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Payload } from '../../../org/ahocorasick/trie/Payload.d.ts'
import type { PayloadTrie } from '../../../org/ahocorasick/trie/PayloadTrie.d.ts'
import type { TrieConfig } from '../../../org/ahocorasick/trie/TrieConfig.d.ts'
export class PayloadTrie$PayloadTrieBuilder<T extends unknown> extends Object {
    private constructor()
    constructor(arg0: PayloadTrie$1)
    // private trie: PayloadTrie<T>;
    // private trieConfig: TrieConfig;
    addKeyword(arg0: string): PayloadTrie$PayloadTrieBuilder<T>;
    addKeyword(arg0: string, arg1: T): PayloadTrie$PayloadTrieBuilder<T>;
    addKeywords(arg0: Payload<T>[]): PayloadTrie$PayloadTrieBuilder<T>;
    build(): PayloadTrie<T>;
    caseInsensitive(): PayloadTrie$PayloadTrieBuilder<T>;
    ignoreCase(): PayloadTrie$PayloadTrieBuilder<T>;
    ignoreOverlaps(): PayloadTrie$PayloadTrieBuilder<T>;
    onlyWholeWords(): PayloadTrie$PayloadTrieBuilder<T>;
    onlyWholeWordsWhiteSpaceSeparated(): PayloadTrie$PayloadTrieBuilder<T>;
    removeOverlaps(): PayloadTrie$PayloadTrieBuilder<T>;
    stopOnHit(): PayloadTrie$PayloadTrieBuilder<T>;
}