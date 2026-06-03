import type { Event } from '../../../../../../com/oracle/truffle/tools/dap/types/Event.d.ts'
import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { StoppedEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/StoppedEvent$EventBody.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class StoppedEvent extends Event {
    static create(paramevent: string, paramseq: number): Event;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    static create(parambody: StoppedEvent$EventBody, paramseq: number): StoppedEvent;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): StoppedEvent$EventBody;
    hashCode(): number;
    setBody(body: StoppedEvent$EventBody): StoppedEvent;
    setBody(body: Object): Event;
}