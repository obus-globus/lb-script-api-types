import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { CaseFoldData$CaseFoldAlgorithm } from '../../../../../../com/oracle/truffle/regex/tregex/parser/CaseFoldData$CaseFoldAlgorithm.d.ts'
import type { CaseFoldData$CaseFoldTable } from '../../../../../../com/oracle/truffle/regex/tregex/parser/CaseFoldData$CaseFoldTable.d.ts'
import type { CaseFoldData$CaseFoldUnfoldAlgorithm } from '../../../../../../com/oracle/truffle/regex/tregex/parser/CaseFoldData$CaseFoldUnfoldAlgorithm.d.ts'
import type { CaseUnfoldingTrie } from '../../../../../../com/oracle/truffle/regex/tregex/parser/CaseUnfoldingTrie.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CaseFoldData extends Object {
    static FOLDABLE_CHARACTERS: (Object | null)[];
    static FOLDED_CHARACTERS: (Object | null)[];
    static MAX_MULTI_CHAR_SEQUENCE_LENGTH: number;
    static applyCaseFoldUnfold(paramcodePointSet: Range[], paramtmp: Range[], paramalgorithm: CaseFoldData$CaseFoldUnfoldAlgorithm): void;
    static getTable(paramalgorithm: CaseFoldData$CaseFoldAlgorithm): CaseFoldData$CaseFoldTable;
    static getUnfoldingTrie(paramalgorithm: CaseFoldData$CaseFoldAlgorithm): CaseUnfoldingTrie;
    static simpleCaseFold(paramcodePointSet: (Object | null)[], paramtmp: Range[]): (Object | null)[];
    static simpleCaseFold(paramalgorithm: CaseFoldData$CaseFoldAlgorithm, paramcodepoint: number): number;
    static simpleCaseFold(paramalgorithm: CaseFoldData$CaseFoldAlgorithm, paramstring: string): string;
    constructor()
}