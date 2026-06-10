import type { Object } from '../../../java/lang/Object.d.ts'
import type { PayloadTrie$PayloadTrieBuilder } from '../../../org/ahocorasick/trie/PayloadTrie$PayloadTrieBuilder.d.ts'
import type { Trie } from '../../../org/ahocorasick/trie/Trie.d.ts'
export class Trie$TrieBuilder extends Object {
    private constructor()
    // private delegate: PayloadTrie$PayloadTrieBuilder<string>;
    addKeyword(arg0: string): Trie$TrieBuilder;
    addKeywords(arg0: string[]): Trie$TrieBuilder;
    build(): Trie;
    caseInsensitive(): Trie$TrieBuilder;
    ignoreCase(): Trie$TrieBuilder;
    ignoreOverlaps(): Trie$TrieBuilder;
    onlyWholeWords(): Trie$TrieBuilder;
    onlyWholeWordsWhiteSpaceSeparated(): Trie$TrieBuilder;
    removeOverlaps(): Trie$TrieBuilder;
    stopOnHit(): Trie$TrieBuilder;
}