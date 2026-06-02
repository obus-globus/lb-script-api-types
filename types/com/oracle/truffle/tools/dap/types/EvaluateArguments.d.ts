import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { ValueFormat } from '../../../../../../com/oracle/truffle/tools/dap/types/ValueFormat.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class EvaluateArguments extends JSONBase {
    static create(paramexpression: string): EvaluateArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getContext(): string;
    getExpression(): string;
    getFormat(): ValueFormat;
    getFrameId(): number;
    hashCode(): number;
    setContext(context: string): EvaluateArguments;
    setExpression(expression: string): EvaluateArguments;
    setFormat(format: ValueFormat): EvaluateArguments;
    setFrameId(frameId: number): EvaluateArguments;
}