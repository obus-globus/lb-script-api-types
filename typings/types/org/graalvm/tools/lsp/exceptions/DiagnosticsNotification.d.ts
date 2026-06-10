import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Diagnostic } from '../../../../../org/graalvm/tools/lsp/server/types/Diagnostic.d.ts'
import type { PublishDiagnosticsParams } from '../../../../../org/graalvm/tools/lsp/server/types/PublishDiagnosticsParams.d.ts'
export class DiagnosticsNotification extends Exception {
    static create(paramuri: URI, paramdiagnostic: Diagnostic): DiagnosticsNotification;
    constructor(paramsCollection: PublishDiagnosticsParams[])
    constructor(paramsMap: Map<URI, Diagnostic[]>)
    constructor(diagnosticParams: PublishDiagnosticsParams)
    // private paramsCollection: PublishDiagnosticsParams[];
    getDiagnosticParamsCollection(): PublishDiagnosticsParams[];
}