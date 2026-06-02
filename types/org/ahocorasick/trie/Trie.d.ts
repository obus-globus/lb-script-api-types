import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Emit } from '../../../org/ahocorasick/trie/Emit.d.ts'
import type { PayloadTrie } from '../../../org/ahocorasick/trie/PayloadTrie.d.ts'
import type { Trie$TrieBuilder } from '../../../org/ahocorasick/trie/Trie$TrieBuilder.d.ts'
import type { EmitHandler } from '../../../org/ahocorasick/trie/handler/EmitHandler.d.ts'
import type { StatefulEmitHandler } from '../../../org/ahocorasick/trie/handler/StatefulEmitHandler.d.ts'
export class Trie extends Object {
    static builder(): Trie$TrieBuilder;
    private constructor(arg0: PayloadTrie<string>)
    // private payloadTrie: PayloadTrie<string>;
    containsMatch(arg0: CharSequence): boolean;
    firstMatch(arg0: CharSequence): Emit;
    parseText(arg0: CharSequence): E[];
    parseText(arg0: CharSequence, arg1: EmitHandler): void;
    parseText(arg0: CharSequence, arg1: StatefulEmitHandler): E[];
    tokenize(arg0: string): E[];
}