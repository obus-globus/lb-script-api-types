import type { Event } from '../../../../../../com/oracle/truffle/tools/dap/types/Event.d.ts'
import type { ProcessEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ProcessEvent$EventBody.d.ts'
import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ProcessEvent extends Event {
    static create(paramevent: string, paramseq: number): Event;
    static create(parambody: ProcessEvent$EventBody, paramseq: number): ProcessEvent;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): ProcessEvent$EventBody;
    hashCode(): number;
    setBody(body: ProcessEvent$EventBody): ProcessEvent;
    setBody(body: Object): Event;
}