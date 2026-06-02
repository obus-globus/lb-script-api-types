import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { ContextAwareExecutor } from '../../../../../../org/graalvm/tools/lsp/server/ContextAwareExecutor.d.ts'
import type { AbstractRequestHandler } from '../../../../../../org/graalvm/tools/lsp/server/request/AbstractRequestHandler.d.ts'
import type { DocumentHighlight } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentHighlight.d.ts'
import type { TextDocumentSurrogate } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogate.d.ts'
import type { TextDocumentSurrogateMap } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogateMap.d.ts'
export class HighlightRequestHandler extends AbstractRequestHandler {
    constructor(envMain: TruffleInstrument$Env, env: TruffleInstrument$Env, surrogateMap: TextDocumentSurrogateMap, executor: ContextAwareExecutor)
    // private addHighlights(scopeRoot: Node, variableNames: string[], highlights: DocumentHighlight[]): void;
    findOtherReadOrWrites(surrogate: TextDocumentSurrogate, nodeAtCaret: InstrumentableNode, line: number, character: number): DocumentHighlight[];
    highlightWithEnteredContext(uri: URI, line: number, character: number): DocumentHighlight[];
}