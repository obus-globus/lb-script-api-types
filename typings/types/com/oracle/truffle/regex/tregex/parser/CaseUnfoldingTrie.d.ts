import type { CaseFoldData$CaseFoldAlgorithm } from '../../../../../../com/oracle/truffle/regex/tregex/parser/CaseFoldData$CaseFoldAlgorithm.d.ts'
import type { CaseUnfoldingTrie$Unfolding } from '../../../../../../com/oracle/truffle/regex/tregex/parser/CaseUnfoldingTrie$Unfolding.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class CaseUnfoldingTrie extends Object {
    static findSingleCharUnfoldings(paramalgorithm: CaseFoldData$CaseFoldAlgorithm, paramcaseFolded: number): number[];
    static findSingleCharUnfoldings(paramalgorithm: CaseFoldData$CaseFoldAlgorithm, paramcaseFolded: number[]): number[];
    static findUnfoldings(paramalgorithm: CaseFoldData$CaseFoldAlgorithm, paramcaseFolded: number[]): CaseUnfoldingTrie$Unfolding[];
    constructor(depth: number)
    // private childNodes: EconomicMap<number, CaseUnfoldingTrie>;
    readonly codepoints: number[];
    readonly depth: number;
    add(codepoint: number, caseFoldedString: number[], offset: number): void;
    getChildAt(index: number): CaseUnfoldingTrie;
    getCodepoints(): number[];
    getDepth(): number;
    hasChildAt(index: number): boolean;
}