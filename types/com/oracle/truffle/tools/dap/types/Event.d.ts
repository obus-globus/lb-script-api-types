import type { ProtocolMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/ProtocolMessage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Event extends ProtocolMessage {
    static create(paramevent: string, paramseq: number): Event;
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBody(): Object;
    getEvent(): string;
    hashCode(): number;
    setBody(body: Object): Event;
    setEvent(event: string): Event;
}