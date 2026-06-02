import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Location } from '../../../../../../org/graalvm/tools/lsp/server/types/Location.d.ts'
export class DiagnosticRelatedInformation extends JSONBase {
    static create(paramlocation: Location, parammessage: string): DiagnosticRelatedInformation;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getLocation(): Location;
    getMessage(): string;
    hashCode(): number;
    setLocation(location: Location): DiagnosticRelatedInformation;
    setMessage(message: string): DiagnosticRelatedInformation;
}