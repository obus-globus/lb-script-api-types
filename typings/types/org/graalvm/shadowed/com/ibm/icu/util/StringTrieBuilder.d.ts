import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { StringTrieBuilder$Node } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$Node.d.ts'
import type { StringTrieBuilder$Option } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$Option.d.ts'
import type { StringTrieBuilder$State } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$State.d.ts'
import type { StringTrieBuilder$ValueNode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder$ValueNode.d.ts'
export abstract class StringTrieBuilder extends Object {
    constructor()
    // private lookupFinalValueNode: StringTrieBuilder$ValueNode;
    // private nodes: JavaMap<StringTrieBuilder$Node, StringTrieBuilder$Node>;
    // private root: StringTrieBuilder$Node;
    // private state: StringTrieBuilder$State;
    // private strings: StringBuilder;
    addImpl(s: CharSequence, value: number): void;
    buildImpl(buildOption: StringTrieBuilder$Option): void;
    clearImpl(): void;
    // private createSuffixNode(s: CharSequence, start: number, sValue: number): StringTrieBuilder$ValueNode;
    getMaxBranchLinearSubNodeLength(): number;
    getMaxLinearMatchLength(): number;
    getMinLinearMatch(): number;
    matchNodesCanHaveValues(): boolean;
    // private registerFinalValue(value: number): StringTrieBuilder$ValueNode;
    // private registerNode(newNode: StringTrieBuilder$Node): StringTrieBuilder$Node;
    write(unit: number): number;
    write(offset: number, length: number): number;
    writeDeltaTo(jumpTarget: number): number;
    writeValueAndFinal(i: number, isFinal: boolean): number;
    writeValueAndType(hasValue: boolean, value: number, node: number): number;
}