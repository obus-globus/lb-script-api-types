import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class GotoTarget extends JSONBase {
    static create(paramid: number, paramlabel: string, paramline: number): GotoTarget;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getColumn(): number;
    getEndColumn(): number;
    getEndLine(): number;
    getId(): number;
    getInstructionPointerReference(): string;
    getLabel(): string;
    getLine(): number;
    hashCode(): number;
    setColumn(column: number): GotoTarget;
    setEndColumn(endColumn: number): GotoTarget;
    setEndLine(endLine: number): GotoTarget;
    setId(id: number): GotoTarget;
    setInstructionPointerReference(instructionPointerReference: string): GotoTarget;
    setLabel(label: string): GotoTarget;
    setLine(line: number): GotoTarget;
}