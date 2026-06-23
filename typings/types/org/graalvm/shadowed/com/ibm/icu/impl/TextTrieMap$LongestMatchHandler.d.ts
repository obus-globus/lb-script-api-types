import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { TextTrieMap$ResultHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
export class TextTrieMap$LongestMatchHandler<V extends unknown> extends Object implements TextTrieMap$ResultHandler<V> {
    private constructor()
    // private length: number;
    readonly matches: Iterator<V>;
    getMatchLength(): number;
    getMatches(): Iterator<V>;
    handlePrefixMatch(matchLength: number, values: Iterator<V>): boolean;
}