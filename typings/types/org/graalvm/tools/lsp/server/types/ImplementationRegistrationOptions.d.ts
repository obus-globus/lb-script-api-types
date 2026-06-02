import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { ImplementationOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/ImplementationOptions.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class ImplementationRegistrationOptions extends ImplementationOptions {
    static create(): ImplementationOptions;
    static create(paramdocumentSelector: Object[]): ImplementationRegistrationOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDocumentSelector(): Object[];
    getId(): string;
    hashCode(): number;
    setDocumentSelector(documentSelector: Object[]): ImplementationRegistrationOptions;
    setId(id: string): ImplementationRegistrationOptions;
}