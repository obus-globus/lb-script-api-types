import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { FileChangeType } from '../../../../../../org/graalvm/tools/lsp/server/types/FileChangeType.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class FileEvent extends JSONBase {
    static create(paramuri: string, paramtype: FileChangeType): FileEvent;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getType(): FileChangeType;
    getUri(): string;
    hashCode(): number;
    setType(type: FileChangeType): FileEvent;
    setUri(uri: string): FileEvent;
}