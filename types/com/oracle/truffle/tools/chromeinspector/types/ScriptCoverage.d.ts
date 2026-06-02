import type { FunctionCoverage } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/FunctionCoverage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ScriptCoverage extends Object {
    constructor(scriptId: number, url: string, functions: FunctionCoverage[])
    readonly functions: FunctionCoverage[];
    readonly scriptId: number;
    readonly url: string;
    getFunctions(): FunctionCoverage[];
    getScriptId(): number;
    getUrl(): string;
    toJSON(): JSONObject;
}