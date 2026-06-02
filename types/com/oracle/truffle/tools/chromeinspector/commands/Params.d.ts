import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Params extends Object {
    static createConsoleAPICalled(paramtype: string, paramtext: Object, paramcontextId: number): Params;
    static createContext(paramid: number, paramname: string): Params;
    static createContextId(paramid: number): Params;
    constructor(json: JSONObject)
    // private json: JSONObject;
    getBoolean(name: string): Optional<boolean>;
    getBreakpointId(): string;
    getJSONObject(): JSONObject;
    getMaxDepth(): number;
    getPatterns(): string[];
    getSamplingInterval(): number;
    getScriptId(): string;
    getState(): string;
}