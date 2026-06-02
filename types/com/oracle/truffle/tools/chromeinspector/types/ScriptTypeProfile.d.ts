import type { TypeProfileEntry } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/TypeProfileEntry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ScriptTypeProfile extends Object {
    constructor(scriptId: number, url: string, entries: TypeProfileEntry[])
    readonly entries: TypeProfileEntry[];
    readonly scriptId: number;
    readonly url: string;
    getEntries(): TypeProfileEntry[];
    getScriptId(): number;
    getUrl(): string;
    toJSON(): JSONObject;
}