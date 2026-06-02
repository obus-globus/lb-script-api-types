import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { StringTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Node } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
export class StringTrieBuilder$ValueNode extends StringTrieBuilder$Node {
    constructor()
    constructor(v: number)
    // private hasValue: boolean;
    value: number;
    add(builder: StringTrieBuilder, s: CharSequence, start: number, sValue: number): StringTrieBuilder$Node;
    equals(other: Object | null): boolean;
    hashCode(): number;
    // private setFinalValue(v: number): void;
    setValue(v: number): void;
    write(builder: StringTrieBuilder): void;
}