import type { StringTrieBuilder } from '../../../../com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Node } from '../../../../com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { StringTrieBuilder$ValueNode } from '../../../../com/ibm/icu/util/StringTrieBuilder$ValueNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class StringTrieBuilder$LinearMatchNode extends StringTrieBuilder$ValueNode {
    constructor(arg0: CharSequence, arg1: number, arg2: number, arg3: StringTrieBuilder$Node)
    // private hash: number;
    // private length: number;
    // private next: StringTrieBuilder$Node;
    // private stringOffset: number;
    // private strings: CharSequence;
    add(arg0: StringTrieBuilder, arg1: CharSequence, arg2: number, arg3: number): StringTrieBuilder$Node;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    markRightEdgesFirst(arg0: number): number;
    register(arg0: StringTrieBuilder): StringTrieBuilder$Node;
    // private setHashCode(): void;
    write(arg0: StringTrieBuilder): void;
}