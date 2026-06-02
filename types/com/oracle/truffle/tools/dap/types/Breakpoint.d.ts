import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Breakpoint extends JSONBase {
    static create(paramverified: boolean): Breakpoint;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getColumn(): number;
    getEndColumn(): number;
    getEndLine(): number;
    getId(): number;
    getLine(): number;
    getMessage(): string;
    getSource(): Source;
    hashCode(): number;
    isVerified(): boolean;
    setColumn(column: number): Breakpoint;
    setEndColumn(endColumn: number): Breakpoint;
    setEndLine(endLine: number): Breakpoint;
    setId(id: number): Breakpoint;
    setLine(line: number): Breakpoint;
    setMessage(message: string): Breakpoint;
    setSource(source: Source): Breakpoint;
    setVerified(verified: boolean): Breakpoint;
}