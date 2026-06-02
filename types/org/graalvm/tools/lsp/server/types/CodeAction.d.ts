import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CodeActionKind } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeActionKind.d.ts'
import type { Command } from '../../../../../../org/graalvm/tools/lsp/server/types/Command.d.ts'
import type { Diagnostic } from '../../../../../../org/graalvm/tools/lsp/server/types/Diagnostic.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { WorkspaceEdit } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceEdit.d.ts'
export class CodeAction extends JSONBase {
    static create(paramtitle: string, paramcommandOrEdit: Object, paramkind: CodeActionKind): CodeAction;
    static create(paramtitle: string, paramcommand: Command, paramkind: CodeActionKind): CodeAction;
    static create(paramtitle: string, paramedit: WorkspaceEdit, paramkind: CodeActionKind): CodeAction;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCommand(): Command;
    getDiagnostics(): Diagnostic[];
    getEdit(): WorkspaceEdit;
    getIsPreferred(): boolean;
    getKind(): CodeActionKind;
    getTitle(): string;
    hashCode(): number;
    setCommand(command: Command): CodeAction;
    setDiagnostics(diagnostics: Diagnostic[]): CodeAction;
    setEdit(edit: WorkspaceEdit): CodeAction;
    setIsPreferred(isPreferred: boolean): CodeAction;
    setKind(kind: CodeActionKind): CodeAction;
    setTitle(title: string): CodeAction;
}