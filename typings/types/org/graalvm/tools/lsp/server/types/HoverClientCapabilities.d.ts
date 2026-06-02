import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { MarkupKind } from '../../../../../../org/graalvm/tools/lsp/server/types/MarkupKind.d.ts'
export class HoverClientCapabilities extends JSONBase {
    static create(): HoverClientCapabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getContentFormat(): MarkupKind[];
    getDynamicRegistration(): boolean;
    hashCode(): number;
    setContentFormat(contentFormat: MarkupKind[]): HoverClientCapabilities;
    setDynamicRegistration(dynamicRegistration: boolean): HoverClientCapabilities;
}