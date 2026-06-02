import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { StringTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/StringTrieBuilder.d.ts'
export abstract class StringTrieBuilder$Node extends Object {
    constructor()
    offset: number;
    add(builder: StringTrieBuilder, s: CharSequence, start: number, sValue: number): StringTrieBuilder$Node;
    equals(other: Object | null): boolean;
    getOffset(): number;
    hashCode(): number;
    markRightEdgesFirst(edgeNumber: number): number;
    register(builder: StringTrieBuilder): StringTrieBuilder$Node;
    write(builder: StringTrieBuilder): void;
    writeUnlessInsideRightEdge(firstRight: number, lastRight: number, builder: StringTrieBuilder): void;
}