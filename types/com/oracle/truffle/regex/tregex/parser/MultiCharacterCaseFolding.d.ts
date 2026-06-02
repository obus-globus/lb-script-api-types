import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { CaseFoldData$CaseFoldAlgorithm } from '../../../../../../com/oracle/truffle/regex/tregex/parser/CaseFoldData$CaseFoldAlgorithm.d.ts'
import type { OracleDBCharClassTrieNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/OracleDBCharClassTrieNode.d.ts'
import type { RegexASTBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTBuilder.d.ts'
import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MultiCharacterCaseFolding extends Object {
    static caseClosure(paramalgorithm: CaseFoldData$CaseFoldAlgorithm, paramcharClass: Range[], paramtmp: Range[], paramfilter: (param0: number, param1: number) => kotlin.Boolean, paramallowedCodePoints: (Object | null)[], paramtransitiveEquivalence: boolean): void;
    static caseClosureMultiCodePoint(paramalgorithm: CaseFoldData$CaseFoldAlgorithm, paramcharClass: Range[]): (Object | null)[];
    static caseFold(paramalgorithm: CaseFoldData$CaseFoldAlgorithm, paramcodePoint: number): number[];
    static caseFoldUnfoldString(paramalgorithm: CaseFoldData$CaseFoldAlgorithm, paramcodepoints: number[], paramencodingRange: (Object | null)[], paramdropAsciiOnStart: boolean, paramtransitiveEquivalence: boolean, paramastBuilder: RegexASTBuilder, paramroot: OracleDBCharClassTrieNode, paramcompilationBuffer: CompilationBuffer): OracleDBCharClassTrieNode;
    static equalsIgnoreCase(paramalgorithm: CaseFoldData$CaseFoldAlgorithm, paramcodePointA: number, paramcodePointB: number): boolean;
    constructor()
}