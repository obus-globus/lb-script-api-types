import type { Event } from '../../../../../../com/oracle/truffle/tools/dap/types/Event.d.ts'
import type { ExitedEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ExitedEvent$EventBody.d.ts'
import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ExitedEvent extends Event {
    static create(paramevent: string, paramseq: number): Event;
    static create(parambody: ExitedEvent$EventBody, paramseq: number): ExitedEvent;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): ExitedEvent$EventBody;
    hashCode(): number;
    setBody(body: ExitedEvent$EventBody): ExitedEvent;
}