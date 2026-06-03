import type { GotoTargetsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/GotoTargetsResponse$ResponseBody.d.ts'
import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Response } from '../../../../../../com/oracle/truffle/tools/dap/types/Response.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class GotoTargetsResponse extends Response {
    static create(parambody: GotoTargetsResponse$ResponseBody, paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): GotoTargetsResponse;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): Response;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): GotoTargetsResponse$ResponseBody;
    hashCode(): number;
    setBody(body: GotoTargetsResponse$ResponseBody): GotoTargetsResponse;
    setBody(body: Object): Response;
}