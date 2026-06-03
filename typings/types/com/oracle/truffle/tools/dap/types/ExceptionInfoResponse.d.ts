import type { ExceptionInfoResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ExceptionInfoResponse$ResponseBody.d.ts'
import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Response } from '../../../../../../com/oracle/truffle/tools/dap/types/Response.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ExceptionInfoResponse extends Response {
    static create(parambody: ExceptionInfoResponse$ResponseBody, paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): ExceptionInfoResponse;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): Response;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): ExceptionInfoResponse$ResponseBody;
    hashCode(): number;
    setBody(body: ExceptionInfoResponse$ResponseBody): ExceptionInfoResponse;
    setBody(body: Object): Response;
}