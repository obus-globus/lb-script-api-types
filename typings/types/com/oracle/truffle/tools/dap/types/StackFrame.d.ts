import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class StackFrame extends JSONBase {
    static create(paramid: number, paramname: string, paramline: number, paramcolumn: number): StackFrame;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getColumn(): number;
    getEndColumn(): number;
    getEndLine(): number;
    getId(): number;
    getInstructionPointerReference(): string;
    getLine(): number;
    getModuleId(): Object;
    getName(): string;
    getPresentationHint(): string;
    getSource(): Source;
    hashCode(): number;
    setColumn(column: number): StackFrame;
    setEndColumn(endColumn: number): StackFrame;
    setEndLine(endLine: number): StackFrame;
    setId(id: number): StackFrame;
    setInstructionPointerReference(instructionPointerReference: string): StackFrame;
    setLine(line: number): StackFrame;
    setModuleId(moduleId: Object): StackFrame;
    setName(name: string): StackFrame;
    setPresentationHint(presentationHint: string): StackFrame;
    setSource(source: Source): StackFrame;
}