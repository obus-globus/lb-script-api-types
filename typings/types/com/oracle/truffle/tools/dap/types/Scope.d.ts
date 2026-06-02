import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Scope extends JSONBase {
    static create(paramname: string, paramvariablesReference: number, paramexpensive: boolean): Scope;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getColumn(): number;
    getEndColumn(): number;
    getEndLine(): number;
    getIndexedVariables(): number;
    getLine(): number;
    getName(): string;
    getNamedVariables(): number;
    getPresentationHint(): string;
    getSource(): Source;
    getVariablesReference(): number;
    hashCode(): number;
    isExpensive(): boolean;
    setColumn(column: number): Scope;
    setEndColumn(endColumn: number): Scope;
    setEndLine(endLine: number): Scope;
    setExpensive(expensive: boolean): Scope;
    setIndexedVariables(indexedVariables: number): Scope;
    setLine(line: number): Scope;
    setName(name: string): Scope;
    setNamedVariables(namedVariables: number): Scope;
    setPresentationHint(presentationHint: string): Scope;
    setSource(source: Source): Scope;
    setVariablesReference(variablesReference: number): Scope;
}