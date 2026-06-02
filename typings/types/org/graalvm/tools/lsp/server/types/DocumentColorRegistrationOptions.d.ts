import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { DocumentColorOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/DocumentColorOptions.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class DocumentColorRegistrationOptions extends DocumentColorOptions {
    static create(): DocumentColorOptions;
    static create(paramdocumentSelector: Object[]): DocumentColorRegistrationOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDocumentSelector(): Object[];
    getId(): string;
    hashCode(): number;
    setDocumentSelector(documentSelector: Object[]): DocumentColorRegistrationOptions;
    setId(id: string): DocumentColorRegistrationOptions;
}