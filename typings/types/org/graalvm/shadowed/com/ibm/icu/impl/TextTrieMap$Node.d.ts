import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { TextTrieMap$CharIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap$CharIterator.d.ts'
import type { TextTrieMap$Output } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap$Output.d.ts'
export class TextTrieMap$Node extends Object {
    // private _children: TextTrieMap$Node[];
    // private _text: string[];
    // private _values: V[];
    // private add<V extends unknown>(text: string[], offset: number, value: V): void;
    add<V extends unknown>(chitr: TextTrieMap$CharIterator, value: V): void;
    // private addValue<V extends unknown>(list: V[], value: V): V[];
    charCount(): number;
    findMatch<V extends unknown>(chitr: TextTrieMap$CharIterator, output: TextTrieMap$Output): TextTrieMap$Node;
    // private lenMatches(text: string[], offset: number): number;
    // private matchFollowing(chitr: TextTrieMap$CharIterator, output: TextTrieMap$Output): boolean;
    putLeadCodePoints(output: string[]): void;
    // private split(offset: number): void;
    values<V extends unknown>(): Iterator<V>;
}