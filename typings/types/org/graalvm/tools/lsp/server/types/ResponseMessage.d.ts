import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Message } from '../../../../../../org/graalvm/tools/lsp/server/types/Message.d.ts'
import type { ResponseErrorLiteral } from '../../../../../../org/graalvm/tools/lsp/server/types/ResponseErrorLiteral.d.ts'
export class ResponseMessage extends Message {
    static create(paramjsonrpc: string): Message;
    static create(paramid: Object, paramjsonrpc: string): ResponseMessage;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getError(): ResponseErrorLiteral;
    getId(): Object;
    getResult(): Object;
    hashCode(): number;
    setError(error: ResponseErrorLiteral): ResponseMessage;
    setId(id: Object): ResponseMessage;
    setResult(result: Object): ResponseMessage;
}