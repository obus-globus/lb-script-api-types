import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class ParameterInformation extends JSONBase {
    static create(paramlabel: Object, paramdocumentation: string): ParameterInformation;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDocumentation(): Object;
    getLabel(): Object;
    hashCode(): number;
    setDocumentation(documentation: Object): ParameterInformation;
    setLabel(label: Object): ParameterInformation;
}