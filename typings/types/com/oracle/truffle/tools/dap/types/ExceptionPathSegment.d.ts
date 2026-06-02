import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ExceptionPathSegment extends JSONBase {
    static create(paramnames: string[]): ExceptionPathSegment;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getNames(): string[];
    getNegate(): boolean;
    hashCode(): number;
    setNames(names: string[]): ExceptionPathSegment;
    setNegate(negate: boolean): ExceptionPathSegment;
}