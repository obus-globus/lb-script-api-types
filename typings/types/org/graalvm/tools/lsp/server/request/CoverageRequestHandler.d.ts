import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { ContextAwareExecutor } from '../../../../../../org/graalvm/tools/lsp/server/ContextAwareExecutor.d.ts'
import type { AbstractRequestHandler } from '../../../../../../org/graalvm/tools/lsp/server/request/AbstractRequestHandler.d.ts'
import type { SourceCodeEvaluator } from '../../../../../../org/graalvm/tools/lsp/server/request/SourceCodeEvaluator.d.ts'
import type { Coverage } from '../../../../../../org/graalvm/tools/lsp/server/types/Coverage.d.ts'
import type { TextDocumentSurrogateMap } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogateMap.d.ts'
export class CoverageRequestHandler extends AbstractRequestHandler {
    constructor(envMain: TruffleInstrument$Env, env: TruffleInstrument$Env, surrogateMap: TextDocumentSurrogateMap, contextAwareExecutor: ContextAwareExecutor, sourceCodeEvaluator: SourceCodeEvaluator)
    // private sourceCodeEvaluator: SourceCodeEvaluator;
    // private clearRelatedCoverageData(runScriptUri: URI): void;
    getCoverageWithEnteredContext(uri: URI): Coverage;
    runCoverageAnalysisWithEnteredContext(uri: URI): boolean;
}