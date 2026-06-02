import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CodeLensOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeLensOptions.d.ts'
import type { CompletionOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionOptions.d.ts'
import type { DocumentLinkOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentLinkOptions.d.ts'
import type { DocumentOnTypeFormattingOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentOnTypeFormattingOptions.d.ts'
import type { ExecuteCommandOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/ExecuteCommandOptions.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { ServerCapabilities$WorkspaceCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/ServerCapabilities$WorkspaceCapabilities.d.ts'
import type { SignatureHelpOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/SignatureHelpOptions.d.ts'
export class ServerCapabilities extends JSONBase {
    static create(): ServerCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCodeActionProvider(): Object;
    getCodeLensProvider(): CodeLensOptions;
    getColorProvider(): Object;
    getCompletionProvider(): CompletionOptions;
    getDeclarationProvider(): Object;
    getDefinitionProvider(): Object;
    getDocumentFormattingProvider(): Object;
    getDocumentHighlightProvider(): Object;
    getDocumentLinkProvider(): DocumentLinkOptions;
    getDocumentOnTypeFormattingProvider(): DocumentOnTypeFormattingOptions;
    getDocumentRangeFormattingProvider(): Object;
    getDocumentSymbolProvider(): Object;
    getExecuteCommandProvider(): ExecuteCommandOptions;
    getExperimental(): Object;
    getFoldingRangeProvider(): Object;
    getHoverProvider(): Object;
    getImplementationProvider(): Object;
    getReferencesProvider(): Object;
    getRenameProvider(): Object;
    getSelectionRangeProvider(): Object;
    getSignatureHelpProvider(): SignatureHelpOptions;
    getTextDocumentSync(): Object;
    getTypeDefinitionProvider(): Object;
    getWorkspace(): ServerCapabilities$WorkspaceCapabilities;
    getWorkspaceSymbolProvider(): Object;
    hashCode(): number;
    setCodeActionProvider(codeActionProvider: Object): ServerCapabilities;
    setCodeLensProvider(codeLensProvider: CodeLensOptions): ServerCapabilities;
    setColorProvider(colorProvider: Object): ServerCapabilities;
    setCompletionProvider(completionProvider: CompletionOptions): ServerCapabilities;
    setDeclarationProvider(declarationProvider: Object): ServerCapabilities;
    setDefinitionProvider(definitionProvider: Object): ServerCapabilities;
    setDocumentFormattingProvider(documentFormattingProvider: Object): ServerCapabilities;
    setDocumentHighlightProvider(documentHighlightProvider: Object): ServerCapabilities;
    setDocumentLinkProvider(documentLinkProvider: DocumentLinkOptions): ServerCapabilities;
    setDocumentOnTypeFormattingProvider(documentOnTypeFormattingProvider: DocumentOnTypeFormattingOptions): ServerCapabilities;
    setDocumentRangeFormattingProvider(documentRangeFormattingProvider: Object): ServerCapabilities;
    setDocumentSymbolProvider(documentSymbolProvider: Object): ServerCapabilities;
    setExecuteCommandProvider(executeCommandProvider: ExecuteCommandOptions): ServerCapabilities;
    setExperimental(experimental: Object): ServerCapabilities;
    setFoldingRangeProvider(foldingRangeProvider: Object): ServerCapabilities;
    setHoverProvider(hoverProvider: Object): ServerCapabilities;
    setImplementationProvider(implementationProvider: Object): ServerCapabilities;
    setReferencesProvider(referencesProvider: Object): ServerCapabilities;
    setRenameProvider(renameProvider: Object): ServerCapabilities;
    setSelectionRangeProvider(selectionRangeProvider: Object): ServerCapabilities;
    setSignatureHelpProvider(signatureHelpProvider: SignatureHelpOptions): ServerCapabilities;
    setTextDocumentSync(textDocumentSync: Object): ServerCapabilities;
    setTypeDefinitionProvider(typeDefinitionProvider: Object): ServerCapabilities;
    setWorkspace(workspace: ServerCapabilities$WorkspaceCapabilities): ServerCapabilities;
    setWorkspaceSymbolProvider(workspaceSymbolProvider: Object): ServerCapabilities;
}