import type { BreakpointEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/BreakpointEvent$EventBody.d.ts'
import type { Event } from '../../../../../../com/oracle/truffle/tools/dap/types/Event.d.ts'
import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class BreakpointEvent extends Event {
    static create(parambody: BreakpointEvent$EventBody, paramseq: number): BreakpointEvent;
    static create(paramevent: string, paramseq: number): Event;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): BreakpointEvent$EventBody;
    hashCode(): number;
    setBody(body: BreakpointEvent$EventBody): BreakpointEvent;
    setBody(body: Object): Event;
}