import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class RuntimeCallFrame extends Object {
    constructor(functionName: string, scriptId: number, url: string, line: number, column: number)
    readonly column: number;
    readonly functionName: string;
    readonly line: number;
    readonly scriptId: number;
    readonly url: string;
    getColumn(): number;
    getFunctionName(): string;
    getLine(): number;
    getScriptId(): number;
    getUrl(): string;
    toJSON(): JSONObject;
}