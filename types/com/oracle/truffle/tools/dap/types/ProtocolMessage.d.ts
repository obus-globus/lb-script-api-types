import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ProtocolMessage extends JSONBase {
    static create(paramseq: number, paramtype: string): ProtocolMessage;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getSeq(): number;
    getType(): string;
    hashCode(): number;
    setSeq(seq: number): ProtocolMessage;
    setType(type: string): ProtocolMessage;
}