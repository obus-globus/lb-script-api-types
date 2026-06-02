import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ReadMemoryArguments extends JSONBase {
    static create(parammemoryReference: string, paramcount: number): ReadMemoryArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCount(): number;
    getMemoryReference(): string;
    getOffset(): number;
    hashCode(): number;
    setCount(count: number): ReadMemoryArguments;
    setMemoryReference(memoryReference: string): ReadMemoryArguments;
    setOffset(offset: number): ReadMemoryArguments;
}