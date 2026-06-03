import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { StringTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$BranchNode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$BranchNode.d.ts'
import type { StringTrieBuilder$Node } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
export class StringTrieBuilder$ListBranchNode extends StringTrieBuilder$BranchNode {
    constructor(capacity: number)
    // private equal: StringTrieBuilder$Node[];
    // private length: number;
    // private units: string[];
    // private values: number[];
    add(c: number, value: number): void;
    add(c: number, node: StringTrieBuilder$Node): void;
    add(builder: StringTrieBuilder, s: CharSequence, start: number, sValue: number): StringTrieBuilder$Node;
    equals(other: Object | null): boolean;
    hashCode(): number;
    markRightEdgesFirst(edgeNumber: number): number;
    write(builder: StringTrieBuilder): void;
}