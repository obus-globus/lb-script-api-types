import type { TruffleFile } from '../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexExecNode } from '../../../../../com/oracle/truffle/regex/RegexExecNode.d.ts'
import type { RegexLanguage } from '../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexProfile } from '../../../../../com/oracle/truffle/regex/RegexProfile.d.ts'
import type { RegexSource } from '../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { CompilationBuffer } from '../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { DFAGenerator } from '../../../../../com/oracle/truffle/regex/tregex/dfa/DFAGenerator.d.ts'
import type { NFA } from '../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { PureNFA } from '../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFA.d.ts'
import type { TRegexExecNode$LazyCaptureGroupRegexSearchNode } from '../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecNode$LazyCaptureGroupRegexSearchNode.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { TRegexDFAExecutorProperties } from '../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorProperties.d.ts'
import type { TRegexBacktrackerSubExecutorNode } from '../../../../../com/oracle/truffle/regex/tregex/nodes/nfa/TRegexBacktrackerSubExecutorNode.d.ts'
import type { RegexAST } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { DebugUtil$Timer } from '../../../../../com/oracle/truffle/regex/tregex/util/DebugUtil$Timer.d.ts'
import type { JsonObject$JsonObjectProperty } from '../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject$JsonObjectProperty.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TRegexCompilationRequest extends Object {
    constructor(language: RegexLanguage, source: RegexSource)
    constructor(language: RegexLanguage, nfa: NFA)
    readonly ast: RegexAST;
    // private compilationBuffer: CompilationBuffer;
    // private executorNodeBackward: TRegexDFAExecutorNode;
    // private executorNodeCaptureGroups: TRegexDFAExecutorNode;
    // private executorNodeForward: TRegexDFAExecutorNode;
    // private language: RegexLanguage;
    readonly namedCaptureGroups: AbstractRegexObject;
    // private nfa: NFA;
    // private pureNFA: PureNFA;
    // private source: RegexSource;
    // private timer: DebugUtil$Timer;
    // private traceFinderNFA: NFA;
    compile(): RegexExecNode;
    compileBacktrackingExecutor(): TRegexBacktrackerSubExecutorNode;
    compileEagerDFAExecutor(): TRegexDFAExecutorNode;
    // private compileInternal(): RegexExecNode;
    compileLazyDFAExecutor(profile: RegexProfile, allowSimpleCG: boolean): TRegexExecNode$LazyCaptureGroupRegexSearchNode;
    compileLazyDFAExecutorFromSource(profile: RegexProfile, allowSimpleCG: boolean): TRegexExecNode$LazyCaptureGroupRegexSearchNode;
    // private createAST(): void;
    createDFAExecutor(nfaArg: NFA, props: TRegexDFAExecutorProperties, debugDumpName: string): TRegexDFAExecutorNode;
    // private createDFAExecutor(nfaArg: NFA, forward: boolean, searching: boolean, genericCG: boolean, allowSimpleCG: boolean, trackLastGroup: boolean): TRegexDFAExecutorNode;
    // private createNFA(): void;
    // private debugAST(): void;
    // private debugDFA(dfa: DFAGenerator, debugDumpName: string): void;
    // private debugNFA(): void;
    // private debugPureNFA(): void;
    // private debugTraceFinder(): void;
    // private dumpAST(): void;
    // private dumpNFA(): void;
    // private dumpNFAJson(file: TruffleFile, dumpNFA: NFA, forward: boolean): void;
    // private dumpPureNFA(): void;
    // private dumpPureNFA(subtree: PureNFA, fileName: string): void;
    // private dumpTraceFinder(): void;
    getAst(): RegexAST;
    getNamedCaptureGroups(): AbstractRegexObject;
    // private logAutomatonSizes(): void;
    // private parse(): void;
    // private patternToJson(): JsonObject$JsonObjectProperty;
    // private phaseEnd(phase: string): void;
    // private phaseStart(phase: string): void;
    // private prepareASTForDFA(): void;
}