import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { WorkDoneProgressParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressParams.d.ts'
export class WorkspaceSymbolParams extends WorkDoneProgressParams {
    static create(): WorkDoneProgressParams;
    static create(paramquery: string): WorkspaceSymbolParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getPartialResultToken(): Object;
    getQuery(): string;
    hashCode(): number;
    setPartialResultToken(partialResultToken: Object): WorkspaceSymbolParams;
    setQuery(query: string): WorkspaceSymbolParams;
}