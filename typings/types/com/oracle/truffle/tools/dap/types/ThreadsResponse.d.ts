import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Response } from '../../../../../../com/oracle/truffle/tools/dap/types/Response.d.ts'
import type { ThreadsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ThreadsResponse$ResponseBody.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ThreadsResponse extends Response {
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): Response;
    static create(parambody: ThreadsResponse$ResponseBody, paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): ThreadsResponse;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): ThreadsResponse$ResponseBody;
    hashCode(): number;
    setBody(body: ThreadsResponse$ResponseBody): ThreadsResponse;
    setBody(body: Object): Response;
}