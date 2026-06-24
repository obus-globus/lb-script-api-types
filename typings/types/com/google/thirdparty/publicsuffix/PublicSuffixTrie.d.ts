import type { PublicSuffixType } from '../../../../com/google/thirdparty/publicsuffix/PublicSuffixType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class PublicSuffixTrie extends Object {
    constructor(trieDataChunks: CharSequence[], stringPoolChunks: CharSequence[], chunkShift: number)
    // private stringPool: CharSequence;
    // private trieData: CharSequence;
    // private compareLabel(label: string, offset: number): number;
    // private findChild(firstChild: number, numChildren: number, label: string): number;
    findSuffixIndex(labels: string[]): number;
    findSuffixIndex(labels: string[], desiredType: PublicSuffixType): number;
    // private getExactMatchType(metadata: number): PublicSuffixType;
    // private getType(typeBits: number): PublicSuffixType;
    // private getWildcardMatchType(metadata: number): PublicSuffixType;
}