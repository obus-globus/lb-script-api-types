import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleFile } from '../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleLogger } from '../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LSPCommand } from '../../../../../org/graalvm/tools/api/lsp/LSPCommand.d.ts'
import type { LSPServerAccessor } from '../../../../../org/graalvm/tools/api/lsp/LSPServerAccessor.d.ts'
import type { ContextAwareExecutor } from '../../../../../org/graalvm/tools/lsp/server/ContextAwareExecutor.d.ts'
import type { LanguageTriggerCharacters } from '../../../../../org/graalvm/tools/lsp/server/LanguageTriggerCharacters.d.ts'
import type { VirtualLanguageServerFileProvider } from '../../../../../org/graalvm/tools/lsp/server/VirtualLanguageServerFileProvider.d.ts'
import type { CompletionRequestHandler } from '../../../../../org/graalvm/tools/lsp/server/request/CompletionRequestHandler.d.ts'
import type { CoverageRequestHandler } from '../../../../../org/graalvm/tools/lsp/server/request/CoverageRequestHandler.d.ts'
import type { HighlightRequestHandler } from '../../../../../org/graalvm/tools/lsp/server/request/HighlightRequestHandler.d.ts'
import type { HoverRequestHandler } from '../../../../../org/graalvm/tools/lsp/server/request/HoverRequestHandler.d.ts'
import type { SignatureHelpRequestHandler } from '../../../../../org/graalvm/tools/lsp/server/request/SignatureHelpRequestHandler.d.ts'
import type { SourceCodeEvaluator } from '../../../../../org/graalvm/tools/lsp/server/request/SourceCodeEvaluator.d.ts'
import type { CompletionContext } from '../../../../../org/graalvm/tools/lsp/server/types/CompletionContext.d.ts'
import type { CompletionList } from '../../../../../org/graalvm/tools/lsp/server/types/CompletionList.d.ts'
import type { Coverage } from '../../../../../org/graalvm/tools/lsp/server/types/Coverage.d.ts'
import type { DocumentHighlight } from '../../../../../org/graalvm/tools/lsp/server/types/DocumentHighlight.d.ts'
import type { ExecuteCommandParams } from '../../../../../org/graalvm/tools/lsp/server/types/ExecuteCommandParams.d.ts'
import type { Hover } from '../../../../../org/graalvm/tools/lsp/server/types/Hover.d.ts'
import type { ServerCapabilities } from '../../../../../org/graalvm/tools/lsp/server/types/ServerCapabilities.d.ts'
import type { SignatureHelp } from '../../../../../org/graalvm/tools/lsp/server/types/SignatureHelp.d.ts'
import type { TextDocumentContentChangeEvent } from '../../../../../org/graalvm/tools/lsp/server/types/TextDocumentContentChangeEvent.d.ts'
import type { TextDocumentSurrogate } from '../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogate.d.ts'
import type { TextDocumentSurrogateMap } from '../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogateMap.d.ts'
export class TruffleAdapter extends Object implements VirtualLanguageServerFileProvider {
    constructor(mainEnv: TruffleInstrument$Env, developerMode: boolean)
    // private completionHandler: CompletionRequestHandler;
    // private completionTriggerCharacters: LanguageTriggerCharacters;
    // private contextAwareExecutor: ContextAwareExecutor;
    // private coverageHandler: CoverageRequestHandler;
    // private developerMode: boolean;
    // private envInternal: TruffleInstrument$Env;
    // private envMain: TruffleInstrument$Env;
    // private extensionCommands: LSPCommand[];
    // private highlightHandler: HighlightRequestHandler;
    // private hoverHandler: HoverRequestHandler;
    readonly logger: TruffleLogger;
    // private lspServer: LSPServerAccessor;
    // private signatureHelpHandler: SignatureHelpRequestHandler;
    // private signatureTriggerCharacters: LanguageTriggerCharacters;
    // private sourceCodeEvaluator: SourceCodeEvaluator;
    // private surrogateMap: TextDocumentSurrogateMap;
    completion(uri: URI, line: number, column: number, completionContext: CompletionContext): Future<CompletionList>;
    createExtensionCommand(params: ExecuteCommandParams): Future<Object>;
    // private createLSPRequestHandlers(): void;
    didClose(uri: URI): void;
    documentHighlight(uri: URI, line: number, character: number): Future<DocumentHighlight[]>;
    // private findLanguageInfo(langId: string, truffleFile: TruffleFile): LanguageInfo;
    getCoverage(uri: URI): Future<Coverage>;
    getExtensionCommandNames(): string[];
    // private getExternalCommands(): LSPCommand[];
    getLanguageId(uri: URI): string;
    getLogger(): TruffleLogger;
    getOrCreateSurrogate(uri: URI, text: string, languageInfo: LanguageInfo): TextDocumentSurrogate;
    getSource(uri: URI): Source;
    getSourceText(path: Path[]): string;
    hasCoverageData(uri: URI): boolean;
    hover(uri: URI, line: number, column: number): Future<Hover>;
    // private initSurrogateMap(): void;
    initializeLSPServer(server: LSPServerAccessor): void;
    isVirtualFile(path: Path[]): boolean;
    parse(text: string, langId: string, uri: URI): Future<CallTarget>;
    parseWithEnteredContext(text: string, langId: string, uri: URI): CallTarget;
    parseWithEnteredContext(surrogate: TextDocumentSurrogate): CallTarget;
    processChangesAndParse(list: TextDocumentContentChangeEvent[], uri: URI): Future<TextDocumentSurrogate>;
    processChangesAndParseWithContextEntered(list: TextDocumentContentChangeEvent[], uri: URI): TextDocumentSurrogate;
    register(environment: TruffleInstrument$Env, executor: ContextAwareExecutor): void;
    reparse(uri: URI): Future<Object>;
    runCoverageAnalysis(uri: URI): Future<boolean>;
    setServerCapabilities(languageId: string, capabilities: ServerCapabilities): void;
    signatureHelp(uri: URI, line: number, character: number): Future<SignatureHelp>;
    surrogateGetter(languageInfo: LanguageInfo): (param0: URI) => TextDocumentSurrogate;
}