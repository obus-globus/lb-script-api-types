import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class CompletionsArguments extends JSONBase {
    static create(paramtext: string, paramcolumn: number): CompletionsArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getColumn(): number;
    getFrameId(): number;
    getLine(): number;
    getText(): string;
    hashCode(): number;
    setColumn(column: number): CompletionsArguments;
    setFrameId(frameId: number): CompletionsArguments;
    setLine(line: number): CompletionsArguments;
    setText(text: string): CompletionsArguments;
}