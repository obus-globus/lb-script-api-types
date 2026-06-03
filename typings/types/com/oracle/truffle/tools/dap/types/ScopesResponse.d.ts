import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Response } from '../../../../../../com/oracle/truffle/tools/dap/types/Response.d.ts'
import type { ScopesResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ScopesResponse$ResponseBody.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ScopesResponse extends Response {
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): Response;
    static create(parambody: ScopesResponse$ResponseBody, paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): ScopesResponse;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): ScopesResponse$ResponseBody;
    hashCode(): number;
    setBody(body: ScopesResponse$ResponseBody): ScopesResponse;
    setBody(body: Object): Response;
}