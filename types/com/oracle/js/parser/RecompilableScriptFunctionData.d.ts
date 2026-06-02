import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RecompilableScriptFunctionData extends Object{
    getEndParserState(): Object;
    getFunctionFlags(): number;
    getFunctionNodeId(): number;
    getScriptFunctionData(functionId: number): RecompilableScriptFunctionData;
}