import type { StringTrieBuilder } from '../../../../com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Node } from '../../../../com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { StringTrieBuilder$ValueNode } from '../../../../com/ibm/icu/util/StringTrieBuilder$ValueNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringTrieBuilder$IntermediateValueNode extends StringTrieBuilder$ValueNode {
    constructor(arg0: number, arg1: StringTrieBuilder$Node)
    // private next: StringTrieBuilder$Node;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    markRightEdgesFirst(arg0: number): number;
    write(arg0: StringTrieBuilder): void;
}