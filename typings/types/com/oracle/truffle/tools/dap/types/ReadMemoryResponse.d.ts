import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { ReadMemoryResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ReadMemoryResponse$ResponseBody.d.ts'
import type { Response } from '../../../../../../com/oracle/truffle/tools/dap/types/Response.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ReadMemoryResponse extends Response {
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): ReadMemoryResponse;
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): Response;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): ReadMemoryResponse$ResponseBody;
    hashCode(): number;
    setBody(body: ReadMemoryResponse$ResponseBody): ReadMemoryResponse;
    setBody(body: Object): Response;
}