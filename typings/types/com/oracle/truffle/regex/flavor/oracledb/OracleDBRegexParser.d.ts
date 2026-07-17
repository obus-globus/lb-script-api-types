import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { RegexSyntaxException$ErrorCode } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException$ErrorCode.d.ts'
import type { ClassSetContents } from '../../../../../../com/oracle/truffle/regex/charset/ClassSetContents.d.ts'
import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { OracleDBFlags } from '../../../../../../com/oracle/truffle/regex/flavor/oracledb/OracleDBFlags.d.ts'
import type { OracleDBRegexLexer } from '../../../../../../com/oracle/truffle/regex/flavor/oracledb/OracleDBRegexLexer.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { CaseFoldData$CaseFoldAlgorithm } from '../../../../../../com/oracle/truffle/regex/tregex/parser/CaseFoldData$CaseFoldAlgorithm.d.ts'
import type { OracleDBCharClassTrieNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/OracleDBCharClassTrieNode.d.ts'
import type { RegexASTBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTBuilder.d.ts'
import type { RegexParser } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexParser.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OracleDBRegexParser extends Object implements RegexParser {
    constructor(language: RegexLanguage, source: RegexSource, compilationBuffer: CompilationBuffer)
    constructor(language: RegexLanguage, source: RegexSource, compilationBuffer: CompilationBuffer, originalSource: RegexSource)
    // private astBuilder: RegexASTBuilder;
    // private charClassTmp2: Range[];
    // private charClassTmpCaseClosure: Range[];
    // private curCharClass: OracleDBCharClassTrieNode;
    readonly flags: OracleDBFlags;
    // private lexer: OracleDBRegexLexer;
    // private source: RegexSource;
    // private addCCAtom(contents: ClassSetContents): void;
    // private addCCAtomCodePointSet(codePointSet: (Object | null)[]): void;
    // private addCCAtomIgnoreCase(contents: ClassSetContents): void;
    // private addCCAtomMultiCharExpansion(contents: ClassSetContents, algorithm: CaseFoldData$CaseFoldAlgorithm): void;
    // private addCharClass(ccEnd: Token): void;
    // private addLiteralString(literalStringBuffer: number[], sourceSections: SourceSection[]): void;
    // private caseClosure(algorithm: CaseFoldData$CaseFoldAlgorithm, codePointSet: (Object | null)[]): void;
    // private ccAtomRangeIgnoreCase(lo: number, hi: number): (Object | null)[];
    getFlags(): OracleDBFlags;
    getNamedCaptureGroups(): AbstractRegexObject;
    parse(): RegexAST;
    // private syntaxError(msg: string, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    // private utf16RangeQuirkTransform(contents: ClassSetContents): (Object | null)[];
}