import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { TextEdit } from '../../../../../../org/graalvm/tools/lsp/server/types/TextEdit.d.ts'
export class WorkspaceEdit extends JSONBase {
    static create(): WorkspaceEdit;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getChanges(): JavaMap<string, TextEdit[]>;
    getDocumentChanges(): Object[];
    hashCode(): number;
    setChanges(changes: JavaMap<string, TextEdit[]>): WorkspaceEdit;
    setDocumentChanges(documentChanges: Object[]): WorkspaceEdit;
}