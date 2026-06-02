import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StringTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Node } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { StringTrieBuilder$ValueNode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$ValueNode.d.ts'
export class StringTrieBuilder$BranchHeadNode extends StringTrieBuilder$ValueNode {
    constructor(len: number, subNode: StringTrieBuilder$Node)
    // private length: number;
    // private next: StringTrieBuilder$Node;
    equals(other: Object | null): boolean;
    hashCode(): number;
    markRightEdgesFirst(edgeNumber: number): number;
    write(builder: StringTrieBuilder): void;
}