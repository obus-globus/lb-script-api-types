import type { BreakpointLocationsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/BreakpointLocationsResponse$ResponseBody.d.ts'
import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Response } from '../../../../../../com/oracle/truffle/tools/dap/types/Response.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class BreakpointLocationsResponse extends Response {
    static create(parambody: BreakpointLocationsResponse$ResponseBody, paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): BreakpointLocationsResponse;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): Response;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): BreakpointLocationsResponse$ResponseBody;
    hashCode(): number;
    setBody(body: BreakpointLocationsResponse$ResponseBody): BreakpointLocationsResponse;
    setBody(body: Object): Response;
}