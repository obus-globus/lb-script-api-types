import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { SelectionRangeOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/SelectionRangeOptions.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class SelectionRangeRegistrationOptions extends SelectionRangeOptions {
    static create(): SelectionRangeOptions;
    static create(paramdocumentSelector: Object[]): SelectionRangeRegistrationOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDocumentSelector(): Object[];
    getId(): string;
    hashCode(): number;
    setDocumentSelector(documentSelector: Object[]): SelectionRangeRegistrationOptions;
    setId(id: string): SelectionRangeRegistrationOptions;
}