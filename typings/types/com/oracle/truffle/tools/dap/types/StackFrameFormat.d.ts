import type { ValueFormat } from '../../../../../../com/oracle/truffle/tools/dap/types/ValueFormat.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class StackFrameFormat extends ValueFormat {
    static create(): StackFrameFormat;
    static create(): ValueFormat;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getIncludeAll(): boolean;
    getLine(): boolean;
    getModule(): boolean;
    getParameterNames(): boolean;
    getParameterTypes(): boolean;
    getParameterValues(): boolean;
    getParameters(): boolean;
    hashCode(): number;
    setIncludeAll(includeAll: boolean): StackFrameFormat;
    setLine(line: boolean): StackFrameFormat;
    setModule(module: boolean): StackFrameFormat;
    setParameterNames(parameterNames: boolean): StackFrameFormat;
    setParameterTypes(parameterTypes: boolean): StackFrameFormat;
    setParameterValues(parameterValues: boolean): StackFrameFormat;
    setParameters(parameters: boolean): StackFrameFormat;
}