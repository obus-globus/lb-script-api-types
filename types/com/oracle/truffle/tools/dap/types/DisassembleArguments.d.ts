import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class DisassembleArguments extends JSONBase {
    static create(parammemoryReference: string, paraminstructionCount: number): DisassembleArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getInstructionCount(): number;
    getInstructionOffset(): number;
    getMemoryReference(): string;
    getOffset(): number;
    getResolveSymbols(): boolean;
    hashCode(): number;
    setInstructionCount(instructionCount: number): DisassembleArguments;
    setInstructionOffset(instructionOffset: number): DisassembleArguments;
    setMemoryReference(memoryReference: string): DisassembleArguments;
    setOffset(offset: number): DisassembleArguments;
    setResolveSymbols(resolveSymbols: boolean): DisassembleArguments;
}