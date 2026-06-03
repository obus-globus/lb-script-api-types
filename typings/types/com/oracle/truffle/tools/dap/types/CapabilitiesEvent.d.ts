import type { CapabilitiesEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/CapabilitiesEvent$EventBody.d.ts'
import type { Event } from '../../../../../../com/oracle/truffle/tools/dap/types/Event.d.ts'
import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class CapabilitiesEvent extends Event {
    static create(parambody: CapabilitiesEvent$EventBody, paramseq: number): CapabilitiesEvent;
    static create(paramevent: string, paramseq: number): Event;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): CapabilitiesEvent$EventBody;
    hashCode(): number;
    setBody(body: CapabilitiesEvent$EventBody): CapabilitiesEvent;
    setBody(body: Object): Event;
}