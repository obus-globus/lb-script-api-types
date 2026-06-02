import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Message } from '../../../../../../org/graalvm/tools/lsp/server/types/Message.d.ts'
export class NotificationMessage extends Message {
    static create(paramjsonrpc: string): Message;
    static create(parammethod: string, paramjsonrpc: string): NotificationMessage;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getMethod(): string;
    getParams(): Object;
    hashCode(): number;
    setMethod(method: string): NotificationMessage;
    setParams(params: Object): NotificationMessage;
}