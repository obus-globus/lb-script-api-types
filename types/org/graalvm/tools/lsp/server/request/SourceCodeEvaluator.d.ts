import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { SourceSectionFilter } from '../../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { ContextAwareExecutor } from '../../../../../../org/graalvm/tools/lsp/server/ContextAwareExecutor.d.ts'
import type { AbstractRequestHandler } from '../../../../../../org/graalvm/tools/lsp/server/request/AbstractRequestHandler.d.ts'
import type { EvaluationResult } from '../../../../../../org/graalvm/tools/lsp/server/utils/EvaluationResult.d.ts'
import type { TextDocumentSurrogate } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogate.d.ts'
import type { TextDocumentSurrogateMap } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogateMap.d.ts'
export class SourceCodeEvaluator extends AbstractRequestHandler {
    constructor(envMain: TruffleInstrument$Env, env: TruffleInstrument$Env, surrogateMap: TextDocumentSurrogateMap, executor: ContextAwareExecutor)
    createSurrogateForTestFile(surrogateOfOpenedFile: TextDocumentSurrogate, runScriptUriFallback: URI): TextDocumentSurrogate;
    // private evalInGlobalScope(langId: string, nearestNode: Node): EvaluationResult;
    // private evalLiteral(nearestNode: Node): EvaluationResult;
    // private evalWithCoverageData(textDocumentSurrogate: TextDocumentSurrogate, nearestNode: Node): EvaluationResult;
    parse(surrogate: TextDocumentSurrogate): CallTarget;
    runToSectionAndEval(surrogate: TextDocumentSurrogate, nearestNode: Node): EvaluationResult;
    runToSectionAndEval(surrogate: TextDocumentSurrogate, sourceSection: SourceSection, eventFilter: SourceSectionFilter, inputFilter: SourceSectionFilter): EvaluationResult;
    tryDifferentEvalStrategies(surrogate: TextDocumentSurrogate, nearestNode: Node): EvaluationResult;
}