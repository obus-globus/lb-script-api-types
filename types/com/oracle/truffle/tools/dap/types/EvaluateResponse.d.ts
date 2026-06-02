import type { EvaluateResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/EvaluateResponse$ResponseBody.d.ts'
import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Response } from '../../../../../../com/oracle/truffle/tools/dap/types/Response.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class EvaluateResponse extends Response {
    static create(parambody: EvaluateResponse$ResponseBody, paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): EvaluateResponse;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): Response;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): EvaluateResponse$ResponseBody;
    hashCode(): number;
    setBody(body: EvaluateResponse$ResponseBody): EvaluateResponse;
}