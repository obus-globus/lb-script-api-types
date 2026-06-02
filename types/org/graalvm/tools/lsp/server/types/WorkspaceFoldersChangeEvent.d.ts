import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { WorkspaceFolder } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceFolder.d.ts'
export class WorkspaceFoldersChangeEvent extends JSONBase {
    static create(paramadded: WorkspaceFolder[], paramremoved: WorkspaceFolder[]): WorkspaceFoldersChangeEvent;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAdded(): WorkspaceFolder[];
    getRemoved(): WorkspaceFolder[];
    hashCode(): number;
    setAdded(added: WorkspaceFolder[]): WorkspaceFoldersChangeEvent;
    setRemoved(removed: WorkspaceFolder[]): WorkspaceFoldersChangeEvent;
}