import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { ValueFormat } from '../../../../../../com/oracle/truffle/tools/dap/types/ValueFormat.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class SetExpressionArguments extends JSONBase {
    static create(paramexpression: string, paramvalue: string): SetExpressionArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getExpression(): string;
    getFormat(): ValueFormat;
    getFrameId(): number;
    getValue(): string;
    hashCode(): number;
    setExpression(expression: string): SetExpressionArguments;
    setFormat(format: ValueFormat): SetExpressionArguments;
    setFrameId(frameId: number): SetExpressionArguments;
    setValue(value: string): SetExpressionArguments;
}