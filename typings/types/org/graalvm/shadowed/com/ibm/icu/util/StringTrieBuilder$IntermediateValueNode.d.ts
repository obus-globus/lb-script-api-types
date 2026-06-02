import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StringTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Node } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { StringTrieBuilder$ValueNode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$ValueNode.d.ts'
export class StringTrieBuilder$IntermediateValueNode extends StringTrieBuilder$ValueNode {
    constructor(v: number, nextNode: StringTrieBuilder$Node)
    // private next: StringTrieBuilder$Node;
    equals(other: Object | null): boolean;
    hashCode(): number;
    markRightEdgesFirst(edgeNumber: number): number;
    write(builder: StringTrieBuilder): void;
}