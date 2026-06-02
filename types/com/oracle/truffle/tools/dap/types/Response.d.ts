import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Response extends ProtocolMessage {
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(paramrequestSeq: number, paramsuccess: boolean, paramcommand: string, paramseq: number): Response;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): Object;
    getCommand(): string;
    getMessage(): string;
    getRequestSeq(): number;
    hashCode(): number;
    isSuccess(): boolean;
    setBody(body: Object): Response;
    setCommand(command: string): Response;
    setMessage(message: string): Response;
    setRequestSeq(requestSeq: number): Response;
    setSuccess(success: boolean): Response;
}