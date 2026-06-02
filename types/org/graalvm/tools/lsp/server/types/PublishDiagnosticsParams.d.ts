import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Diagnostic } from '../../../../../../org/graalvm/tools/lsp/server/types/Diagnostic.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class PublishDiagnosticsParams extends JSONBase {
    static create(paramuri: string, paramdiagnostics: Diagnostic[]): PublishDiagnosticsParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDiagnostics(): Diagnostic[];
    getUri(): string;
    getVersion(): number;
    hashCode(): number;
    setDiagnostics(diagnostics: Diagnostic[]): PublishDiagnosticsParams;
    setUri(uri: string): PublishDiagnosticsParams;
    setVersion(version: number): PublishDiagnosticsParams;
}