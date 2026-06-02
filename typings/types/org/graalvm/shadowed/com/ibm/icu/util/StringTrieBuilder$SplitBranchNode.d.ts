import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StringTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$BranchNode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$BranchNode.d.ts'
import type { StringTrieBuilder$Node } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
export class StringTrieBuilder$SplitBranchNode extends StringTrieBuilder$BranchNode {
    constructor(middleUnit: string, lessThanNode: StringTrieBuilder$Node, greaterOrEqualNode: StringTrieBuilder$Node)
    // private greaterOrEqual: StringTrieBuilder$Node;
    // private lessThan: StringTrieBuilder$Node;
    // private unit: string;
    equals(other: Object | null): boolean;
    hashCode(): number;
    markRightEdgesFirst(edgeNumber: number): number;
    write(builder: StringTrieBuilder): void;
}