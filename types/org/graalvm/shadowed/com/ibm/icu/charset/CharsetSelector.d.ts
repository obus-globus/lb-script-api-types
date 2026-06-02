import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { IntTrie } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/IntTrie.d.ts'
import type { PropsVectors } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/PropsVectors.d.ts'
export class CharsetSelector extends Object {
    constructor(charsetList: string[], excludedCodePoints: string[], mappingTypes: number)
    // private encodings: string[];
    // private pv: number[];
    // private trie: IntTrie;
    // private countOnes(mask: number[], len: number): number;
    // private generateSelectorData(pvec: PropsVectors, excludedCodePoints: string[], mappingTypes: number): void;
    // private intersectMasks(dest: number[], pvIndex: number, len: number): boolean;
    // private selectForMask(mask: number[]): string[];
    selectForString(unicodeText: CharSequence): string[];
}