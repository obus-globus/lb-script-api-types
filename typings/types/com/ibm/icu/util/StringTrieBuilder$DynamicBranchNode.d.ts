import type { StringTrieBuilder } from '../../../../com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Node } from '../../../../com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { StringTrieBuilder$ValueNode } from '../../../../com/ibm/icu/util/StringTrieBuilder$ValueNode.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class StringTrieBuilder$DynamicBranchNode extends StringTrieBuilder$ValueNode {
    constructor()
    // private chars: StringBuilder;
    // private equal: StringTrieBuilder$Node[];
    add(arg0: StringTrieBuilder, arg1: CharSequence, arg2: number, arg3: number): StringTrieBuilder$Node;
    add(arg0: string, arg1: StringTrieBuilder$Node): void;
    // private find(arg0: string): number;
    register(arg0: StringTrieBuilder): StringTrieBuilder$Node;
    // private register(arg0: StringTrieBuilder, arg1: number, arg2: number): StringTrieBuilder$Node;
}