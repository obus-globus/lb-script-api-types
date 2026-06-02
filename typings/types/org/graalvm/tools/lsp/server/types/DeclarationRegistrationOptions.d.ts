import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { DeclarationOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/DeclarationOptions.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class DeclarationRegistrationOptions extends DeclarationOptions {
    static create(): DeclarationOptions;
    static create(paramdocumentSelector: Object[]): DeclarationRegistrationOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDocumentSelector(): Object[];
    getId(): string;
    hashCode(): number;
    setDocumentSelector(documentSelector: Object[]): DeclarationRegistrationOptions;
    setId(id: string): DeclarationRegistrationOptions;
}