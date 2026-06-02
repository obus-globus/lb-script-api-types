import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Message } from '../../../../../../org/graalvm/tools/lsp/server/types/Message.d.ts'
export class RequestMessage extends Message {
    static create(paramjsonrpc: string): Message;
    static create(paramid: Object, parammethod: string, paramjsonrpc: string): RequestMessage;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getId(): Object;
    getMethod(): string;
    getParams(): Object;
    hashCode(): number;
    setId(id: Object): RequestMessage;
    setMethod(method: string): RequestMessage;
    setParams(params: Object): RequestMessage;
}