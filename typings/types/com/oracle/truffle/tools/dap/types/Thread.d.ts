import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Thread extends JSONBase {
    static create(paramid: number, paramname: string): Thread;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getId(): number;
    getName(): string;
    hashCode(): number;
    setId(id: number): Thread;
    setName(name: string): Thread;
}