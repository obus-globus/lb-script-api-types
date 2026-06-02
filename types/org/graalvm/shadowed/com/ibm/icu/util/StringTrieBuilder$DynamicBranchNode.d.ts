import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { StringTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Node } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { StringTrieBuilder$ValueNode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$ValueNode.d.ts'
export class StringTrieBuilder$DynamicBranchNode extends StringTrieBuilder$ValueNode {
    constructor()
    // private chars: StringBuilder;
    // private equal: StringTrieBuilder$Node[];
    add(c: string, node: StringTrieBuilder$Node): void;
    add(builder: StringTrieBuilder, s: CharSequence, start: number, sValue: number): StringTrieBuilder$Node;
    // private find(c: string): number;
    register(builder: StringTrieBuilder): StringTrieBuilder$Node;
    // private register(builder: StringTrieBuilder, start: number, limit: number): StringTrieBuilder$Node;
}