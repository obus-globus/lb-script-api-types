import type { StringTrieBuilder } from '../../../../com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$BranchNode } from '../../../../com/ibm/icu/util/StringTrieBuilder$BranchNode.d.ts'
import type { StringTrieBuilder$Node } from '../../../../com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class StringTrieBuilder$ListBranchNode extends StringTrieBuilder$BranchNode {
    constructor(arg0: number)
    // private equal: StringTrieBuilder$Node[];
    // private length: number;
    // private units: string[];
    // private values: number[];
    add(arg0: StringTrieBuilder, arg1: CharSequence, arg2: number, arg3: number): StringTrieBuilder$Node;
    add(arg0: number, arg1: StringTrieBuilder$Node): void;
    add(arg0: number, arg1: number): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    markRightEdgesFirst(arg0: number): number;
    write(arg0: StringTrieBuilder): void;
}