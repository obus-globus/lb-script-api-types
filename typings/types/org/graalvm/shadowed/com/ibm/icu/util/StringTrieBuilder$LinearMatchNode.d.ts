import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { StringTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Node } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { StringTrieBuilder$ValueNode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$ValueNode.d.ts'
export class StringTrieBuilder$LinearMatchNode extends StringTrieBuilder$ValueNode {
    constructor(builderStrings: CharSequence, sOffset: number, len: number, nextNode: StringTrieBuilder$Node)
    // private hash: number;
    // private length: number;
    // private next: StringTrieBuilder$Node;
    // private stringOffset: number;
    // private strings: CharSequence;
    add(builder: StringTrieBuilder, s: CharSequence, start: number, sValue: number): StringTrieBuilder$Node;
    equals(other: Object | null): boolean;
    hashCode(): number;
    markRightEdgesFirst(edgeNumber: number): number;
    register(builder: StringTrieBuilder): StringTrieBuilder$Node;
    // private setHashCode(): void;
    write(builder: StringTrieBuilder): void;
}