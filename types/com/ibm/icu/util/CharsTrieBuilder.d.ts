import type { CharsTrie$Entry } from '../../../../com/ibm/icu/util/CharsTrie$Entry.d.ts'
import type { StringTrieBuilder } from '../../../../com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { StringTrieBuilder$Option } from '../../../../com/ibm/icu/util/StringTrieBuilder$Option.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CharsTrieBuilder extends StringTrieBuilder {
    constructor()
    // private chars: string[];
    // private charsLength: number;
    // private intUnits: string[];
    add(arg0: CharSequence, arg1: number): CharsTrieBuilder;
    build(arg0: StringTrieBuilder$Option): CharsTrie$Entry[];
    buildCharSequence(arg0: StringTrieBuilder$Option): CharSequence;
    // private buildChars(arg0: StringTrieBuilder$Option): void;
    clear(): CharsTrieBuilder;
    // private ensureCapacity(arg0: number): void;
    getMaxBranchLinearSubNodeLength(): number;
    getMaxLinearMatchLength(): number;
    getMinLinearMatch(): number;
    matchNodesCanHaveValues(): boolean;
    // private write(arg0: string[], arg1: number): number;
    write(arg0: number): number;
    write(arg0: number, arg1: number): number;
    writeDeltaTo(arg0: number): number;
    writeValueAndFinal(arg0: number, arg1: boolean): number;
    writeValueAndType(arg0: boolean, arg1: number, arg2: number): number;
}