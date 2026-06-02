import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Request extends ProtocolMessage {
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(paramcommand: string, paramseq: number): Request;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getArguments(): Object;
    getCommand(): string;
    hashCode(): number;
    setArguments(arguments: Object): Request;
    setCommand(command: string): Request;
}