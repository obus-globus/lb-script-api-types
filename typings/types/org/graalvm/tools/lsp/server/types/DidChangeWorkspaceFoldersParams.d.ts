import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { WorkspaceFoldersChangeEvent } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkspaceFoldersChangeEvent.d.ts'
export class DidChangeWorkspaceFoldersParams extends JSONBase {
    static create(paramevent: WorkspaceFoldersChangeEvent): DidChangeWorkspaceFoldersParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getEvent(): WorkspaceFoldersChangeEvent;
    hashCode(): number;
    setEvent(event: WorkspaceFoldersChangeEvent): DidChangeWorkspaceFoldersParams;
}