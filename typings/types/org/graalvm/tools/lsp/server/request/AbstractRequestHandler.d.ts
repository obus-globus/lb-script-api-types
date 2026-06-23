import type { TruffleLogger } from '../../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { PrintWriter } from '../../../../../../java/io/PrintWriter.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextAwareExecutor } from '../../../../../../org/graalvm/tools/lsp/server/ContextAwareExecutor.d.ts'
import type { SourcePredicateBuilder } from '../../../../../../org/graalvm/tools/lsp/server/utils/SourcePredicateBuilder.d.ts'
import type { TextDocumentSurrogate } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogate.d.ts'
import type { TextDocumentSurrogateMap } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogateMap.d.ts'
export abstract class AbstractRequestHandler extends Object {
    constructor(mainEnv: TruffleInstrument$Env, env: TruffleInstrument$Env, surrogateMap: TextDocumentSurrogateMap, contextAwareExecutor: ContextAwareExecutor)
    // private contextAwareExecutor: ContextAwareExecutor;
    // private env: TruffleInstrument$Env;
    // private err: PrintWriter;
    // private logger: TruffleLogger;
    // private surrogateMap: TextDocumentSurrogateMap;
    findNodeAtCaret(surrogate: TextDocumentSurrogate, line: number, character: number, tag: Class<Object>[]): InstrumentableNode;
    getFutureResultOrHandleExceptions<T extends unknown>(future: Future<T>): T;
    newDefaultSourcePredicateBuilder(): SourcePredicateBuilder;
}