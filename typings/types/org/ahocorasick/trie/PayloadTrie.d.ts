import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Payload } from '../../../org/ahocorasick/trie/Payload.d.ts'
import type { PayloadEmit } from '../../../org/ahocorasick/trie/PayloadEmit.d.ts'
import type { PayloadState } from '../../../org/ahocorasick/trie/PayloadState.d.ts'
import type { PayloadToken } from '../../../org/ahocorasick/trie/PayloadToken.d.ts'
import type { PayloadTrie$PayloadTrieBuilder } from '../../../org/ahocorasick/trie/PayloadTrie$PayloadTrieBuilder.d.ts'
import type { TrieConfig } from '../../../org/ahocorasick/trie/TrieConfig.d.ts'
import type { PayloadEmitHandler } from '../../../org/ahocorasick/trie/handler/PayloadEmitHandler.d.ts'
import type { StatefulPayloadEmitHandler } from '../../../org/ahocorasick/trie/handler/StatefulPayloadEmitHandler.d.ts'
export class PayloadTrie<T extends Object | number | string | boolean> extends Object {
    static builder(): PayloadTrie$PayloadTrieBuilder<Object>;
    constructor(arg0: TrieConfig)
    // private rootState: PayloadState<T>;
    // private trieConfig: TrieConfig;
    // private addKeyword(arg0: string): void;
    // private addKeyword(arg0: string, arg1: T): void;
    // private addState(arg0: string): PayloadState<T>;
    // private constructFailureStates(): void;
    containsMatch(arg0: CharSequence): boolean;
    // private createFragment(arg0: PayloadEmit<T>, arg1: string, arg2: number): PayloadToken<T>;
    // private createMatch(arg0: PayloadEmit<T>, arg1: string): PayloadToken<T>;
    firstMatch(arg0: CharSequence): PayloadEmit<T>;
    // private getRootState(): PayloadState<T>;
    // private getState(arg0: PayloadState<T>, arg1: string): PayloadState<T>;
    // private isCaseInsensitive(): boolean;
    // private isPartialMatch(arg0: CharSequence, arg1: PayloadEmit<T>): boolean;
    // private isPartialMatchWhiteSpaceSeparated(arg0: CharSequence, arg1: PayloadEmit<T>): boolean;
    parseText(arg0: CharSequence): PayloadEmit<T>[];
    parseText(arg0: CharSequence, arg1: PayloadEmitHandler<T>): void;
    parseText(arg0: CharSequence, arg1: StatefulPayloadEmitHandler<T>): PayloadEmit<T>[];
    // private processEmits(arg0: CharSequence, arg1: number, arg2: Payload<T>[], arg3: PayloadEmitHandler<T>): boolean;
    tokenize(arg0: string): PayloadToken<T>[];
}