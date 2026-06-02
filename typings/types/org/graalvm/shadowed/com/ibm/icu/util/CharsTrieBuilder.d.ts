import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { CharsTrie$Entry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CharsTrie$Entry.d.ts'
import type { StringTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Option } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$Option.d.ts'
export class CharsTrieBuilder extends StringTrieBuilder {
    constructor()
    // private chars: string[];
    // private charsLength: number;
    // private intUnits: string[];
    add(s: CharSequence, value: number): CharsTrieBuilder;
    build(buildOption: StringTrieBuilder$Option): CharsTrie$Entry[];
    buildCharSequence(buildOption: StringTrieBuilder$Option): CharSequence;
    // private buildChars(buildOption: StringTrieBuilder$Option): void;
    clear(): CharsTrieBuilder;
    // private ensureCapacity(length: number): void;
    getMaxBranchLinearSubNodeLength(): number;
    getMaxLinearMatchLength(): number;
    getMinLinearMatch(): number;
    matchNodesCanHaveValues(): boolean;
    // private write(s: string[], length: number): number;
    write(unit: number): number;
    write(offset: number, length: number): number;
    writeDeltaTo(jumpTarget: number): number;
    writeValueAndFinal(i: number, isFinal: boolean): number;
    writeValueAndType(hasValue: boolean, value: number, node: number): number;
}