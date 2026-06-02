import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { TypeDefinitionOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/TypeDefinitionOptions.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class TypeDefinitionRegistrationOptions extends TypeDefinitionOptions {
    static create(): TypeDefinitionOptions;
    static create(paramdocumentSelector: Object[]): TypeDefinitionRegistrationOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDocumentSelector(): Object[];
    getId(): string;
    hashCode(): number;
    setDocumentSelector(documentSelector: Object[]): TypeDefinitionRegistrationOptions;
    setId(id: string): TypeDefinitionRegistrationOptions;
}