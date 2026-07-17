import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Message extends JSONBase {
    static create(paramid: number, paramformat: string): Message;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getFormat(): string;
    getId(): number;
    getSendTelemetry(): boolean;
    getShowUser(): boolean;
    getUrl(): string;
    getUrlLabel(): string;
    getVariables(): JavaMap<string, string>;
    hashCode(): number;
    setFormat(format: string): Message;
    setId(id: number): Message;
    setSendTelemetry(sendTelemetry: boolean): Message;
    setShowUser(showUser: boolean): Message;
    setUrl(url: string): Message;
    setUrlLabel(urlLabel: string): Message;
    setVariables(variables: JavaMap<string, string>): Message;
}