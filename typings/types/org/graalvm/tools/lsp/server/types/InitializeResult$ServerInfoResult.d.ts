import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class InitializeResult$ServerInfoResult extends JSONBase {
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getName(): string;
    getVersion(): string;
    hashCode(): number;
    setName(name: string): InitializeResult$ServerInfoResult;
    setVersion(version: string): InitializeResult$ServerInfoResult;
}