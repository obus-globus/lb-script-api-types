import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IntTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/IntTrieBuilder.d.ts'
import type { TrieBuilder$DataManipulate } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TrieBuilder$DataManipulate.d.ts'
export class PropsVectors$DefaultGetFoldedValue extends Object implements TrieBuilder$DataManipulate {
    constructor(inBuilder: IntTrieBuilder)
    // private builder: IntTrieBuilder;
    getFoldedValue(start: number, offset: number): number;
}