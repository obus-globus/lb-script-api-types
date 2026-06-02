import type { StringTrieBuilder } from '../../../../com/ibm/icu/util/StringTrieBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class StringTrieBuilder$Node extends Object {
    constructor()
    offset: number;
    add(arg0: StringTrieBuilder, arg1: CharSequence, arg2: number, arg3: number): StringTrieBuilder$Node;
    equals(arg0: Object | null): boolean;
    getOffset(): number;
    hashCode(): number;
    markRightEdgesFirst(arg0: number): number;
    register(arg0: StringTrieBuilder): StringTrieBuilder$Node;
    write(arg0: StringTrieBuilder): void;
    writeUnlessInsideRightEdge(arg0: number, arg1: number, arg2: StringTrieBuilder): void;
}