import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CodeAction } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeAction.d.ts'
import type { CodeActionParams } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeActionParams.d.ts'
import type { CodeLens } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeLens.d.ts'
import type { CodeLensParams } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeLensParams.d.ts'
import type { ColorInformation } from '../../../../../../org/graalvm/tools/lsp/server/types/ColorInformation.d.ts'
import type { ColorPresentation } from '../../../../../../org/graalvm/tools/lsp/server/types/ColorPresentation.d.ts'
import type { ColorPresentationParams } from '../../../../../../org/graalvm/tools/lsp/server/types/ColorPresentationParams.d.ts'
import type { CompletionItem } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionItem.d.ts'
import type { CompletionList } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionList.d.ts'
import type { CompletionParams } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionParams.d.ts'
import type { DidChangeConfigurationParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DidChangeConfigurationParams.d.ts'
import type { DidChangeTextDocumentParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DidChangeTextDocumentParams.d.ts'
import type { DidChangeWatchedFilesParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DidChangeWatchedFilesParams.d.ts'
import type { DidChangeWorkspaceFoldersParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DidChangeWorkspaceFoldersParams.d.ts'
import type { DidCloseTextDocumentParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DidCloseTextDocumentParams.d.ts'
import type { DidOpenTextDocumentParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DidOpenTextDocumentParams.d.ts'
import type { DidSaveTextDocumentParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DidSaveTextDocumentParams.d.ts'
import type { DocumentColorParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentColorParams.d.ts'
import type { DocumentFormattingParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentFormattingParams.d.ts'
import type { DocumentHighlight } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentHighlight.d.ts'
import type { DocumentLink } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentLink.d.ts'
import type { DocumentLinkParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentLinkParams.d.ts'
import type { DocumentOnTypeFormattingParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentOnTypeFormattingParams.d.ts'
import type { DocumentRangeFormattingParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentRangeFormattingParams.d.ts'
import type { DocumentSymbolParams } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentSymbolParams.d.ts'
import type { ExecuteCommandParams } from '../../../../../../org/graalvm/tools/lsp/server/types/ExecuteCommandParams.d.ts'
import type { FoldingRange } from '../../../../../../org/graalvm/tools/lsp/server/types/FoldingRange.d.ts'
import type { FoldingRangeParams } from '../../../../../../org/graalvm/tools/lsp/server/types/FoldingRangeParams.d.ts'
import type { Hover } from '../../../../../../org/graalvm/tools/lsp/server/types/Hover.d.ts'
import type { InitializeParams } from '../../../../../../org/graalvm/tools/lsp/server/types/InitializeParams.d.ts'
import type { InitializeResult } from '../../../../../../org/graalvm/tools/lsp/server/types/InitializeResult.d.ts'
import type { InitializedParams } from '../../../../../../org/graalvm/tools/lsp/server/types/InitializedParams.d.ts'
import type { LanguageClient } from '../../../../../../org/graalvm/tools/lsp/server/types/LanguageClient.d.ts'
import type { LanguageServer$LoggerProxy } from '../../../../../../org/graalvm/tools/lsp/server/types/LanguageServer$LoggerProxy.d.ts'
import type { Location } from '../../../../../../org/graalvm/tools/lsp/server/types/Location.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
import type { ReferenceParams } from '../../../../../../org/graalvm/tools/lsp/server/types/ReferenceParams.d.ts'
import type { RenameParams } from '../../../../../../org/graalvm/tools/lsp/server/types/RenameParams.d.ts'
import type { SelectionRange } from '../../../../../../org/graalvm/tools/lsp/server/types/SelectionRange.d.ts'
import type { SelectionRangeParams } from '../../../../../../org/graalvm/tools/lsp/server/types/SelectionRangeParams.d.ts'
import type { SignatureHelp } from '../../../../../../org/graalvm/tools/lsp/server/types/SignatureHelp.d.ts'
import type { SymbolInformation } from '../../../../../../org/graalvm/tools/lsp/server/types/SymbolInformation.d.ts'
import type { TextDocumentPositionParams } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentPositionParams.d.ts'
import type { TextEdit } from '../../../../../../org/graalvm/tools/lsp/server/types/TextEdit.d.ts'
import type { WillSaveTextDocumentParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WillSaveTextDocumentParams.d.ts'
import type { WorkDoneProgressCancelParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressCancelParams.d.ts'
import type { WorkspaceEdit } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceEdit.d.ts'
import type { WorkspaceSymbolParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceSymbolParams.d.ts'
export class LanguageServer extends Object {
    constructor()
    cancelProgress(params: WorkDoneProgressCancelParams): void;
    codeAction(params: CodeActionParams): CompletableFuture<CodeAction[]>;
    codeLens(params: CodeLensParams): CompletableFuture<CodeLens[]>;
    colorPresentation(params: ColorPresentationParams): CompletableFuture<ColorPresentation[]>;
    completion(params: CompletionParams): CompletableFuture<CompletionList>;
    connect(client: LanguageClient): void;
    declaration(params: TextDocumentPositionParams): CompletableFuture<Location[]>;
    definition(params: TextDocumentPositionParams): CompletableFuture<Location[]>;
    didChange(params: DidChangeTextDocumentParams): void;
    didChangeConfiguration(params: DidChangeConfigurationParams): void;
    didChangeWatchedFiles(params: DidChangeWatchedFilesParams): void;
    didChangeWorkspaceFolders(params: DidChangeWorkspaceFoldersParams): void;
    didClose(params: DidCloseTextDocumentParams): void;
    didOpen(params: DidOpenTextDocumentParams): void;
    didSave(params: DidSaveTextDocumentParams): void;
    documentColor(params: DocumentColorParams): CompletableFuture<ColorInformation[]>;
    documentHighlight(params: TextDocumentPositionParams): CompletableFuture<DocumentHighlight[]>;
    documentLink(params: DocumentLinkParams): CompletableFuture<DocumentLink[]>;
    documentSymbol(params: DocumentSymbolParams): CompletableFuture<SymbolInformation[]>;
    executeCommand(params: ExecuteCommandParams): CompletableFuture<Object>;
    exit(): void;
    foldingRange(params: FoldingRangeParams): CompletableFuture<FoldingRange[]>;
    formatting(params: DocumentFormattingParams): CompletableFuture<TextEdit[]>;
    getLogger(): LanguageServer$LoggerProxy;
    hover(params: TextDocumentPositionParams): CompletableFuture<Hover>;
    implementation(params: TextDocumentPositionParams): CompletableFuture<Location[]>;
    initialize(params: InitializeParams): CompletableFuture<InitializeResult>;
    initialized(params: InitializedParams): void;
    onTypeFormatting(params: DocumentOnTypeFormattingParams): CompletableFuture<TextEdit[]>;
    prepareRename(params: TextDocumentPositionParams): CompletableFuture<Range>;
    rangeFormatting(params: DocumentRangeFormattingParams): CompletableFuture<TextEdit[]>;
    references(params: ReferenceParams): CompletableFuture<Location[]>;
    rename(params: RenameParams): CompletableFuture<WorkspaceEdit>;
    resolveCodeLens(unresolved: CodeLens): CompletableFuture<CodeLens>;
    resolveCompletion(params: CompletionItem): CompletableFuture<CompletionItem>;
    resolveDocumentLink(params: DocumentLink): CompletableFuture<DocumentLink>;
    selectionRange(params: SelectionRangeParams): CompletableFuture<SelectionRange[]>;
    shutdown(): CompletableFuture<Object>;
    signatureHelp(params: TextDocumentPositionParams): CompletableFuture<SignatureHelp>;
    supportsMethod(method: string, params: JSONObject): boolean;
    symbol(params: WorkspaceSymbolParams): CompletableFuture<SymbolInformation[]>;
    typeDefinition(params: TextDocumentPositionParams): CompletableFuture<Location[]>;
    willSave(params: WillSaveTextDocumentParams): void;
    willSaveWaitUntil(params: WillSaveTextDocumentParams): CompletableFuture<TextEdit[]>;
}