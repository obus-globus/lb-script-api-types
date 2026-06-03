import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { LanguageInfo } from '../../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextAwareExecutor } from '../../../../../../org/graalvm/tools/lsp/server/ContextAwareExecutor.d.ts'
import type { AbstractRequestHandler } from '../../../../../../org/graalvm/tools/lsp/server/request/AbstractRequestHandler.d.ts'
import type { CompletionRequestHandler } from '../../../../../../org/graalvm/tools/lsp/server/request/CompletionRequestHandler.d.ts'
import type { Hover } from '../../../../../../org/graalvm/tools/lsp/server/types/Hover.d.ts'
import type { CoverageData } from '../../../../../../org/graalvm/tools/lsp/server/utils/CoverageData.d.ts'
import type { CoverageEventNode } from '../../../../../../org/graalvm/tools/lsp/server/utils/CoverageEventNode.d.ts'
import type { TextDocumentSurrogateMap } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogateMap.d.ts'
export class HoverRequestHandler extends AbstractRequestHandler {
    constructor(envMain: TruffleInstrument$Env, env: TruffleInstrument$Env, surrogateMap: TextDocumentSurrogateMap, contextAwareExecutor: ContextAwareExecutor, completionHandler: CompletionRequestHandler, developerMode: boolean)
    // private completionHandler: CompletionRequestHandler;
    // private developerMode: boolean;
    // private createDefaultHoverInfos(textAtHoverPosition: string, evalResultObject: Object, langInfo: LanguageInfo): Object[];
    // private evalHoverInfos(coverages: CoverageData[], hoverSection: SourceSection, langInfo: LanguageInfo): Hover;
    hoverWithEnteredContext(uri: URI, line: number, column: number): Hover;
    toString(): string;
    // private toString(evalResultObject: Object, langInfo: LanguageInfo): string;
    // private tryCoverageDataEvaluation(hoverSection: SourceSection, langInfo: LanguageInfo, textAtHoverPosition: string, coverageData: CoverageData): Hover;
    // private tryFrameScope(frame: MaterializedFrame, node: CoverageEventNode, textAtHoverPosition: string, langInfo: LanguageInfo, hoverSection: SourceSection): Hover;
    // private trySignature(hoverSection: SourceSection, langInfo: LanguageInfo, evalResult: TruffleObject): Hover;
}