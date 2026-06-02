import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class DisassembledInstruction extends JSONBase {
    static create(paramaddress: string, paraminstruction: string): DisassembledInstruction;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAddress(): string;
    getColumn(): number;
    getEndColumn(): number;
    getEndLine(): number;
    getInstruction(): string;
    getInstructionBytes(): string;
    getLine(): number;
    getLocation(): Source;
    getSymbol(): string;
    hashCode(): number;
    setAddress(address: string): DisassembledInstruction;
    setColumn(column: number): DisassembledInstruction;
    setEndColumn(endColumn: number): DisassembledInstruction;
    setEndLine(endLine: number): DisassembledInstruction;
    setInstruction(instruction: string): DisassembledInstruction;
    setInstructionBytes(instructionBytes: string): DisassembledInstruction;
    setLine(line: number): DisassembledInstruction;
    setLocation(location: Source): DisassembledInstruction;
    setSymbol(symbol: string): DisassembledInstruction;
}