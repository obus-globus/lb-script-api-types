import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ReadMemoryResponse$ResponseBody extends JSONBase {
    static create(paramaddress: string): ReadMemoryResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAddress(): string;
    getData(): string;
    getUnreadableBytes(): number;
    hashCode(): number;
    setAddress(address: string): ReadMemoryResponse$ResponseBody;
    setData(data: string): ReadMemoryResponse$ResponseBody;
    setUnreadableBytes(unreadableBytes: number): ReadMemoryResponse$ResponseBody;
}