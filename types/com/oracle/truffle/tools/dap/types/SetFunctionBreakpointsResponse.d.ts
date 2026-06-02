import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Response } from '../../../../../../com/oracle/truffle/tools/dap/types/Response.d.ts'
import type { SetFunctionBreakpointsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/SetFunctionBreakpointsResponse$ResponseBody.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SetFunctionBreakpointsResponse extends Response {
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): Response;
    static create(parambody: SetFunctionBreakpointsResponse$ResponseBody, paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): SetFunctionBreakpointsResponse;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): SetFunctionBreakpointsResponse$ResponseBody;
    hashCode(): number;
    setBody(body: SetFunctionBreakpointsResponse$ResponseBody): SetFunctionBreakpointsResponse;
}