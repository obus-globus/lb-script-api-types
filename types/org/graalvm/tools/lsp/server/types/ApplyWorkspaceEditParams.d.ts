import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { WorkspaceEdit } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceEdit.d.ts'
export class ApplyWorkspaceEditParams extends JSONBase {
    static create(paramedit: WorkspaceEdit): ApplyWorkspaceEditParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getEdit(): WorkspaceEdit;
    getLabel(): string;
    hashCode(): number;
    setEdit(edit: WorkspaceEdit): ApplyWorkspaceEditParams;
    setLabel(label: string): ApplyWorkspaceEditParams;
}