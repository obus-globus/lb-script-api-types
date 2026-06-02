import type { ExceptionPathSegment } from '../../../../../../com/oracle/truffle/tools/dap/types/ExceptionPathSegment.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ExceptionOptions extends JSONBase {
    static create(parambreakMode: string): ExceptionOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getBreakMode(): string;
    getPath(): ExceptionPathSegment[];
    hashCode(): number;
    setBreakMode(breakMode: string): ExceptionOptions;
    setPath(path: ExceptionPathSegment[]): ExceptionOptions;
}