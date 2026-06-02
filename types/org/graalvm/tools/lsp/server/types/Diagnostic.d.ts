import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { DiagnosticRelatedInformation } from '../../../../../../org/graalvm/tools/lsp/server/types/DiagnosticRelatedInformation.d.ts'
import type { DiagnosticSeverity } from '../../../../../../org/graalvm/tools/lsp/server/types/DiagnosticSeverity.d.ts'
import type { DiagnosticTag } from '../../../../../../org/graalvm/tools/lsp/server/types/DiagnosticTag.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { Range } from '../../../../../../org/graalvm/tools/lsp/server/types/Range.d.ts'
export class Diagnostic extends JSONBase {
    static create(paramrange: Range, parammessage: string, paramseverity: DiagnosticSeverity, paramcode: Object, paramsource: string, paramrelatedInformation: DiagnosticRelatedInformation[]): Diagnostic;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getCode(): Object;
    getMessage(): string;
    getRange(): Range;
    getRelatedInformation(): DiagnosticRelatedInformation[];
    getSeverity(): DiagnosticSeverity;
    getSource(): string;
    getTags(): DiagnosticTag[];
    hashCode(): number;
    setCode(code: Object): Diagnostic;
    setMessage(message: string): Diagnostic;
    setRange(range: Range): Diagnostic;
    setRelatedInformation(relatedInformation: DiagnosticRelatedInformation[]): Diagnostic;
    setSeverity(severity: DiagnosticSeverity): Diagnostic;
    setSource(source: string): Diagnostic;
    setTags(tags: DiagnosticTag[]): Diagnostic;
}