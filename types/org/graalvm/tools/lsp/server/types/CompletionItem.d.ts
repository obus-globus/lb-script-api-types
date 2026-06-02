import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Command } from '../../../../../../org/graalvm/tools/lsp/server/types/Command.d.ts'
import type { CompletionItemKind } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionItemKind.d.ts'
import type { CompletionItemTag } from '../../../../../../org/graalvm/tools/lsp/server/types/CompletionItemTag.d.ts'
import type { InsertTextFormat } from '../../../../../../org/graalvm/tools/lsp/server/types/InsertTextFormat.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { TextEdit } from '../../../../../../org/graalvm/tools/lsp/server/types/TextEdit.d.ts'
export class CompletionItem extends JSONBase {
    static create(paramlabel: string): CompletionItem;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAdditionalTextEdits(): TextEdit[];
    getCommand(): Command;
    getCommitCharacters(): string[];
    getData(): Object;
    getDeprecated(): boolean;
    getDetail(): string;
    getDocumentation(): Object;
    getFilterText(): string;
    getInsertText(): string;
    getInsertTextFormat(): InsertTextFormat;
    getKind(): CompletionItemKind;
    getLabel(): string;
    getPreselect(): boolean;
    getSortText(): string;
    getTags(): CompletionItemTag[];
    getTextEdit(): TextEdit;
    hashCode(): number;
    setAdditionalTextEdits(additionalTextEdits: TextEdit[]): CompletionItem;
    setCommand(command: Command): CompletionItem;
    setCommitCharacters(commitCharacters: string[]): CompletionItem;
    setData(data: Object): CompletionItem;
    setDeprecated(deprecated: boolean): CompletionItem;
    setDetail(detail: string): CompletionItem;
    setDocumentation(documentation: Object): CompletionItem;
    setFilterText(filterText: string): CompletionItem;
    setInsertText(insertText: string): CompletionItem;
    setInsertTextFormat(insertTextFormat: InsertTextFormat): CompletionItem;
    setKind(kind: CompletionItemKind): CompletionItem;
    setLabel(label: string): CompletionItem;
    setPreselect(preselect: boolean): CompletionItem;
    setSortText(sortText: string): CompletionItem;
    setTags(tags: CompletionItemTag[]): CompletionItem;
    setTextEdit(textEdit: TextEdit): CompletionItem;
}