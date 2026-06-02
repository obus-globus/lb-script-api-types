import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities } from '../../../../../../org/graalvm/tools/lsp/server/types/CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class CodeActionClientCapabilities extends JSONBase {
    static create(): CodeActionClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCodeActionLiteralSupport(): CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities;
    getDynamicRegistration(): boolean;
    getIsPreferredSupport(): boolean;
    hashCode(): number;
    setCodeActionLiteralSupport(codeActionLiteralSupport: CodeActionClientCapabilities$CodeActionLiteralSupportCapabilities): CodeActionClientCapabilities;
    setDynamicRegistration(dynamicRegistration: boolean): CodeActionClientCapabilities;
    setIsPreferredSupport(isPreferredSupport: boolean): CodeActionClientCapabilities;
}