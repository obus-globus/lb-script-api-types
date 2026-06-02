import type { ExceptionOptions } from '../../../../../../com/oracle/truffle/tools/dap/types/ExceptionOptions.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SetExceptionBreakpointsArguments extends JSONBase {
    static create(paramfilters: string[]): SetExceptionBreakpointsArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getExceptionOptions(): ExceptionOptions[];
    getFilters(): string[];
    hashCode(): number;
    setExceptionOptions(exceptionOptions: ExceptionOptions[]): SetExceptionBreakpointsArguments;
    setFilters(filters: string[]): SetExceptionBreakpointsArguments;
}