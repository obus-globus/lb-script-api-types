import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { ParameterInformation } from '../../../../../../org/graalvm/tools/lsp/server/types/ParameterInformation.d.ts'
export class SignatureInformation extends JSONBase {
    static create(paramlabel: string, paramdocumentation: string, paramparameters: (Object | null)[]): SignatureInformation;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDocumentation(): Object;
    getLabel(): string;
    getParameters(): ParameterInformation[];
    hashCode(): number;
    setDocumentation(documentation: Object): SignatureInformation;
    setLabel(label: string): SignatureInformation;
    setParameters(parameters: ParameterInformation[]): SignatureInformation;
}