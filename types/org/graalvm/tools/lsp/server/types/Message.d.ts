import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class Message extends JSONBase {
    static create(paramjsonrpc: string): Message;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getJsonrpc(): string;
    hashCode(): number;
    setJsonrpc(jsonrpc: string): Message;
}