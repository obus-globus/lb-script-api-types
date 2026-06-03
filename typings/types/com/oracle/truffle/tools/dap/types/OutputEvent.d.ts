import type { Event } from '../../../../../../com/oracle/truffle/tools/dap/types/Event.d.ts'
import type { OutputEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/OutputEvent$EventBody.d.ts'
import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class OutputEvent extends Event {
    static create(paramevent: string, paramseq: number): Event;
    static create(parambody: OutputEvent$EventBody, paramseq: number): OutputEvent;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): OutputEvent$EventBody;
    hashCode(): number;
    setBody(body: OutputEvent$EventBody): OutputEvent;
    setBody(body: Object): Event;
}