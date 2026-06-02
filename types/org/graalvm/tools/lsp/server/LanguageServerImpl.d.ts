import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { ServerSocket } from '../../../../../java/net/ServerSocket.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../org/graalvm/collections/Pair.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { TruffleAdapter } from '../../../../../org/graalvm/tools/lsp/server/TruffleAdapter.d.ts'
import type { CodeAction } from '../../../../../org/graalvm/tools/lsp/server/types/CodeAction.d.ts'
import type { CodeActionParams } from '../../../../../org/graalvm/tools/lsp/server/types/CodeActionParams.d.ts'
import type { CodeLens } from '../../../../../org/graalvm/tools/lsp/server/types/CodeLens.d.ts'
import type { CodeLensParams } from '../../../../../org/graalvm/tools/lsp/server/types/CodeLensParams.d.ts'
import type { CompletionItem } from '../../../../../org/graalvm/tools/lsp/server/types/CompletionItem.d.ts'
import type { CompletionList } from '../../../../../org/graalvm/tools/lsp/server/types/CompletionList.d.ts'
import type { CompletionParams } from '../../../../../org/graalvm/tools/lsp/server/types/CompletionParams.d.ts'
import type { DidChangeTextDocumentParams } from '../../../../../org/graalvm/tools/lsp/server/types/DidChangeTextDocumentParams.d.ts'
import type { DidCloseTextDocumentParams } from '../../../../../org/graalvm/tools/lsp/server/types/DidCloseTextDocumentParams.d.ts'
import type { DidOpenTextDocumentParams } from '../../../../../org/graalvm/tools/lsp/server/types/DidOpenTextDocumentParams.d.ts'
import type { DidSaveTextDocumentParams } from '../../../../../org/graalvm/tools/lsp/server/types/DidSaveTextDocumentParams.d.ts'
import type { DocumentFormattingParams } from '../../../../../org/graalvm/tools/lsp/server/types/DocumentFormattingParams.d.ts'
import type { DocumentHighlight } from '../../../../../org/graalvm/tools/lsp/server/types/DocumentHighlight.d.ts'
import type { DocumentOnTypeFormattingParams } from '../../../../../org/graalvm/tools/lsp/server/types/DocumentOnTypeFormattingParams.d.ts'
import type { DocumentRangeFormattingParams } from '../../../../../org/graalvm/tools/lsp/server/types/DocumentRangeFormattingParams.d.ts'
import type { DocumentSymbolParams } from '../../../../../org/graalvm/tools/lsp/server/types/DocumentSymbolParams.d.ts'
import type { ExecuteCommandParams } from '../../../../../org/graalvm/tools/lsp/server/types/ExecuteCommandParams.d.ts'
import type { Hover } from '../../../../../org/graalvm/tools/lsp/server/types/Hover.d.ts'
import type { InitializeParams } from '../../../../../org/graalvm/tools/lsp/server/types/InitializeParams.d.ts'
import type { InitializeResult } from '../../../../../org/graalvm/tools/lsp/server/types/InitializeResult.d.ts'
import type { LanguageClient } from '../../../../../org/graalvm/tools/lsp/server/types/LanguageClient.d.ts'
import type { LanguageServer } from '../../../../../org/graalvm/tools/lsp/server/types/LanguageServer.d.ts'
import type { LanguageServer$LoggerProxy } from '../../../../../org/graalvm/tools/lsp/server/types/LanguageServer$LoggerProxy.d.ts'
import type { Location } from '../../../../../org/graalvm/tools/lsp/server/types/Location.d.ts'
import type { ReferenceParams } from '../../../../../org/graalvm/tools/lsp/server/types/ReferenceParams.d.ts'
import type { RenameParams } from '../../../../../org/graalvm/tools/lsp/server/types/RenameParams.d.ts'
import type { ServerCapabilities } from '../../../../../org/graalvm/tools/lsp/server/types/ServerCapabilities.d.ts'
import type { SignatureHelp } from '../../../../../org/graalvm/tools/lsp/server/types/SignatureHelp.d.ts'
import type { SymbolInformation } from '../../../../../org/graalvm/tools/lsp/server/types/SymbolInformation.d.ts'
import type { TextDocumentContentChangeEvent } from '../../../../../org/graalvm/tools/lsp/server/types/TextDocumentContentChangeEvent.d.ts'
import type { TextDocumentPositionParams } from '../../../../../org/graalvm/tools/lsp/server/types/TextDocumentPositionParams.d.ts'
import type { TextEdit } from '../../../../../org/graalvm/tools/lsp/server/types/TextEdit.d.ts'
import type { WorkspaceEdit } from '../../../../../org/graalvm/tools/lsp/server/types/WorkspaceEdit.d.ts'
import type { WorkspaceSymbolParams } from '../../../../../org/graalvm/tools/lsp/server/types/WorkspaceSymbolParams.d.ts'
export class LanguageServerImpl extends LanguageServer {
    static create(paramadapter: TruffleAdapter, paraminfo: PrintWriter, paramerr: PrintWriter): LanguageServerImpl;
    private constructor(adapter: TruffleAdapter, info: PrintWriter, err: PrintWriter)
    // private client: LanguageClient;
    // private clientConnectionExecutor: ExecutorService;
    // private emptyHover: Hover;
    // private emptySignatureHelp: SignatureHelp;
    // private err: PrintWriter;
    // private info: PrintWriter;
    // private openedFileUri2LangId: Map<URI, string>;
    // private serverCapabilities: ServerCapabilities;
    // private truffleAdapter: TruffleAdapter;
    codeAction(params: CodeActionParams): CompletableFuture<CodeAction[]>;
    codeLens(params: CodeLensParams): CompletableFuture<CodeLens[]>;
    completion(position: CompletionParams): CompletableFuture<CompletionList>;
    connect(client: LanguageClient): void;
    definition(position: TextDocumentPositionParams): CompletableFuture<Location[]>;
    didChange(params: DidChangeTextDocumentParams): void;
    didClose(params: DidCloseTextDocumentParams): void;
    didOpen(params: DidOpenTextDocumentParams): void;
    didSave(params: DidSaveTextDocumentParams): void;
    documentHighlight(position: TextDocumentPositionParams): CompletableFuture<DocumentHighlight[]>;
    documentSymbol(params: DocumentSymbolParams): CompletableFuture<SymbolInformation[]>;
    executeCommand(params: ExecuteCommandParams): CompletableFuture<Object>;
    exit(): void;
    formatting(params: DocumentFormattingParams): CompletableFuture<TextEdit[]>;
    getLogger(): LanguageServer$LoggerProxy;
    hover(position: TextDocumentPositionParams): CompletableFuture<Hover>;
    initialize(initializeParams: InitializeParams): CompletableFuture<InitializeResult>;
    onTypeFormatting(params: DocumentOnTypeFormattingParams): CompletableFuture<TextEdit[]>;
    // private processChanges(documentUri: string, list: TextDocumentContentChangeEvent[]): void;
    rangeFormatting(params: DocumentRangeFormattingParams): CompletableFuture<TextEdit[]>;
    references(params: ReferenceParams): CompletableFuture<Location[]>;
    rename(params: RenameParams): CompletableFuture<WorkspaceEdit>;
    resolveCodeLens(unresolved: CodeLens): CompletableFuture<CodeLens>;
    resolveCompletion(unresolved: CompletionItem): CompletableFuture<CompletionItem>;
    shutdown(): CompletableFuture<Object>;
    signatureHelp(position: TextDocumentPositionParams): CompletableFuture<SignatureHelp>;
    start(serverSocket: ServerSocket, delegateAddresses: Pair<string, SocketAddress>[]): CompletableFuture<Object>;
    supportsMethod(method: string, params: JSONObject): boolean;
    symbol(params: WorkspaceSymbolParams): CompletableFuture<SymbolInformation[]>;
    // private waitForResultAndHandleExceptions<T extends Object | number | string | boolean>(future: Future<T>): T;
    // private waitForResultAndHandleExceptions<T extends Object | number | string | boolean>(future: Future<T>, resultOnError: T): T;
    // private waitForResultAndHandleExceptions<T extends Object | number | string | boolean>(future: Future<T>, resultOnError: T, uriToClearDiagnostics: URI): T;
}