import type { StringTrieBuilder } from '../../../../com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$BranchNode } from '../../../../com/ibm/icu/util/StringTrieBuilder$BranchNode.d.ts'
import type { StringTrieBuilder$Node } from '../../../../com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringTrieBuilder$SplitBranchNode extends StringTrieBuilder$BranchNode {
    constructor(arg0: string, arg1: StringTrieBuilder$Node, arg2: StringTrieBuilder$Node)
    // private greaterOrEqual: StringTrieBuilder$Node;
    // private lessThan: StringTrieBuilder$Node;
    // private unit: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    markRightEdgesFirst(arg0: number): number;
    write(arg0: StringTrieBuilder): void;
}