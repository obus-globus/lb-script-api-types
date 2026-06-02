import type { StringTrieBuilder } from '../../../../com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Node } from '../../../../com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class StringTrieBuilder$ValueNode extends StringTrieBuilder$Node {
    constructor()
    constructor(arg0: number)
    // private hasValue: boolean;
    value: number;
    add(arg0: StringTrieBuilder, arg1: CharSequence, arg2: number, arg3: number): StringTrieBuilder$Node;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    // private setFinalValue(arg0: number): void;
    setValue(arg0: number): void;
    write(arg0: StringTrieBuilder): void;
}