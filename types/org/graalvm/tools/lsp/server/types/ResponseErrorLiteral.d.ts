import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class ResponseErrorLiteral extends JSONBase {
    static create(paramcode: number, parammessage: string): ResponseErrorLiteral;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCode(): number;
    getData(): Object;
    getMessage(): string;
    hashCode(): number;
    setCode(code: number): ResponseErrorLiteral;
    setData(data: Object): ResponseErrorLiteral;
    setMessage(message: string): ResponseErrorLiteral;
}