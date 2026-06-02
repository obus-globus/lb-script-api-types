import type { DisassembledInstruction } from '../../../../../../com/oracle/truffle/tools/dap/types/DisassembledInstruction.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class DisassembleResponse$ResponseBody extends JSONBase {
    static create(paraminstructions: DisassembledInstruction[]): DisassembleResponse$ResponseBody;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getInstructions(): DisassembledInstruction[];
    hashCode(): number;
    setInstructions(instructions: DisassembledInstruction[]): DisassembleResponse$ResponseBody;
}