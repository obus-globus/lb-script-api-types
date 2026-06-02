import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { FileEvent } from '../../../../../../org/graalvm/tools/lsp/server/types/FileEvent.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class DidChangeWatchedFilesParams extends JSONBase {
    static create(paramchanges: FileEvent[]): DidChangeWatchedFilesParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getChanges(): FileEvent[];
    hashCode(): number;
    setChanges(changes: FileEvent[]): DidChangeWatchedFilesParams;
}