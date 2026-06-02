import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CodeActionClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeActionClientCapabilities.d.ts'
import type { CodeLensClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeLensClientCapabilities.d.ts'
import type { CompletionClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionClientCapabilities.d.ts'
import type { DeclarationClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DeclarationClientCapabilities.d.ts'
import type { DefinitionClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DefinitionClientCapabilities.d.ts'
import type { DocumentColorClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentColorClientCapabilities.d.ts'
import type { DocumentFormattingClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentFormattingClientCapabilities.d.ts'
import type { DocumentHighlightClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentHighlightClientCapabilities.d.ts'
import type { DocumentLinkClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentLinkClientCapabilities.d.ts'
import type { DocumentOnTypeFormattingClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentOnTypeFormattingClientCapabilities.d.ts'
import type { DocumentRangeFormattingClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentRangeFormattingClientCapabilities.d.ts'
import type { DocumentSymbolClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentSymbolClientCapabilities.d.ts'
import type { FoldingRangeClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/FoldingRangeClientCapabilities.d.ts'
import type { HoverClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/HoverClientCapabilities.d.ts'
import type { ImplementationClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/ImplementationClientCapabilities.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { PublishDiagnosticsClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/PublishDiagnosticsClientCapabilities.d.ts'
import type { ReferenceClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/ReferenceClientCapabilities.d.ts'
import type { RenameClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/RenameClientCapabilities.d.ts'
import type { SelectionRangeClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/SelectionRangeClientCapabilities.d.ts'
import type { SignatureHelpClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/SignatureHelpClientCapabilities.d.ts'
import type { TextDocumentSyncClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentSyncClientCapabilities.d.ts'
import type { TypeDefinitionClientCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/TypeDefinitionClientCapabilities.d.ts'
export class TextDocumentClientCapabilities extends JSONBase {
    static create(): TextDocumentClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCodeAction(): CodeActionClientCapabilities;
    getCodeLens(): CodeLensClientCapabilities;
    getColorProvider(): DocumentColorClientCapabilities;
    getCompletion(): CompletionClientCapabilities;
    getDeclaration(): DeclarationClientCapabilities;
    getDefinition(): DefinitionClientCapabilities;
    getDocumentHighlight(): DocumentHighlightClientCapabilities;
    getDocumentLink(): DocumentLinkClientCapabilities;
    getDocumentSymbol(): DocumentSymbolClientCapabilities;
    getFoldingRange(): FoldingRangeClientCapabilities;
    getFormatting(): DocumentFormattingClientCapabilities;
    getHover(): HoverClientCapabilities;
    getImplementation(): ImplementationClientCapabilities;
    getOnTypeFormatting(): DocumentOnTypeFormattingClientCapabilities;
    getPublishDiagnostics(): PublishDiagnosticsClientCapabilities;
    getRangeFormatting(): DocumentRangeFormattingClientCapabilities;
    getReferences(): ReferenceClientCapabilities;
    getRename(): RenameClientCapabilities;
    getSelectionRange(): SelectionRangeClientCapabilities;
    getSignatureHelp(): SignatureHelpClientCapabilities;
    getSynchronization(): TextDocumentSyncClientCapabilities;
    getTypeDefinition(): TypeDefinitionClientCapabilities;
    hashCode(): number;
    setCodeAction(codeAction: CodeActionClientCapabilities): TextDocumentClientCapabilities;
    setCodeLens(codeLens: CodeLensClientCapabilities): TextDocumentClientCapabilities;
    setColorProvider(colorProvider: DocumentColorClientCapabilities): TextDocumentClientCapabilities;
    setCompletion(completion: CompletionClientCapabilities): TextDocumentClientCapabilities;
    setDeclaration(declaration: DeclarationClientCapabilities): TextDocumentClientCapabilities;
    setDefinition(definition: DefinitionClientCapabilities): TextDocumentClientCapabilities;
    setDocumentHighlight(documentHighlight: DocumentHighlightClientCapabilities): TextDocumentClientCapabilities;
    setDocumentLink(documentLink: DocumentLinkClientCapabilities): TextDocumentClientCapabilities;
    setDocumentSymbol(documentSymbol: DocumentSymbolClientCapabilities): TextDocumentClientCapabilities;
    setFoldingRange(foldingRange: FoldingRangeClientCapabilities): TextDocumentClientCapabilities;
    setFormatting(formatting: DocumentFormattingClientCapabilities): TextDocumentClientCapabilities;
    setHover(hover: HoverClientCapabilities): TextDocumentClientCapabilities;
    setImplementation(implementation: ImplementationClientCapabilities): TextDocumentClientCapabilities;
    setOnTypeFormatting(onTypeFormatting: DocumentOnTypeFormattingClientCapabilities): TextDocumentClientCapabilities;
    setPublishDiagnostics(publishDiagnostics: PublishDiagnosticsClientCapabilities): TextDocumentClientCapabilities;
    setRangeFormatting(rangeFormatting: DocumentRangeFormattingClientCapabilities): TextDocumentClientCapabilities;
    setReferences(references: ReferenceClientCapabilities): TextDocumentClientCapabilities;
    setRename(rename: RenameClientCapabilities): TextDocumentClientCapabilities;
    setSelectionRange(selectionRange: SelectionRangeClientCapabilities): TextDocumentClientCapabilities;
    setSignatureHelp(signatureHelp: SignatureHelpClientCapabilities): TextDocumentClientCapabilities;
    setSynchronization(synchronization: TextDocumentSyncClientCapabilities): TextDocumentClientCapabilities;
    setTypeDefinition(typeDefinition: TypeDefinitionClientCapabilities): TextDocumentClientCapabilities;
}