import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { StringTrieBuilder$Node } from '../../../../com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { StringTrieBuilder$Option } from '../../../../com/ibm/icu/util/StringTrieBuilder$Option.d.ts'
import type { StringTrieBuilder$State } from '../../../../com/ibm/icu/util/StringTrieBuilder$State.d.ts'
import type { StringTrieBuilder$ValueNode } from '../../../../com/ibm/icu/util/StringTrieBuilder$ValueNode.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class StringTrieBuilder extends Object {
    constructor()
    // private lookupFinalValueNode: StringTrieBuilder$ValueNode;
    // private nodes: JavaMap<StringTrieBuilder$Node, StringTrieBuilder$Node>;
    // private root: StringTrieBuilder$Node;
    // private state: StringTrieBuilder$State;
    // private strings: StringBuilder;
    addImpl(arg0: CharSequence, arg1: number): void;
    buildImpl(arg0: StringTrieBuilder$Option): void;
    clearImpl(): void;
    // private createSuffixNode(arg0: CharSequence, arg1: number, arg2: number): StringTrieBuilder$ValueNode;
    getMaxBranchLinearSubNodeLength(): number;
    getMaxLinearMatchLength(): number;
    getMinLinearMatch(): number;
    matchNodesCanHaveValues(): boolean;
    // private registerFinalValue(arg0: number): StringTrieBuilder$ValueNode;
    // private registerNode(arg0: StringTrieBuilder$Node): StringTrieBuilder$Node;
    write(arg0: number): number;
    write(arg0: number, arg1: number): number;
    writeDeltaTo(arg0: number): number;
    writeValueAndFinal(arg0: number, arg1: boolean): number;
    writeValueAndType(arg0: boolean, arg1: number, arg2: number): number;
}