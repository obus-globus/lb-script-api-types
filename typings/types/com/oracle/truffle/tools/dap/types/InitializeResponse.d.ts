import type { Capabilities } from '../../../../../../com/oracle/truffle/tools/dap/types/Capabilities.d.ts'
import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Response } from '../../../../../../com/oracle/truffle/tools/dap/types/Response.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class InitializeResponse extends Response {
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): InitializeResponse;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): Response;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): Capabilities;
    hashCode(): number;
    setBody(body: Capabilities): InitializeResponse;
    setBody(body: Object): Response;
}