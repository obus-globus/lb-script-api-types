import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ExceptionBreakpointsFilter extends JSONBase {
    static create(paramfilter: string, paramlabel: string): ExceptionBreakpointsFilter;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDefault(): boolean;
    getFilter(): string;
    getLabel(): string;
    hashCode(): number;
    setDefault(defaultValue: boolean): ExceptionBreakpointsFilter;
    setFilter(filter: string): ExceptionBreakpointsFilter;
    setLabel(label: string): ExceptionBreakpointsFilter;
}