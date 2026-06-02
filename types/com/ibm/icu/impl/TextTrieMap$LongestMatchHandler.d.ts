import type { TextTrieMap$ResultHandler } from '../../../../com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TextTrieMap$LongestMatchHandler<V extends Object | number | string | boolean> extends Object implements TextTrieMap$ResultHandler<V> {
    private constructor()
    // private length: number;
    readonly matches: Iterator<V>;
    getMatchLength(): number;
    getMatches(): Iterator<V>;
    handlePrefixMatch(arg0: number, arg1: Iterator<V>): boolean;
}