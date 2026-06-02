import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { FoldingRangeOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/FoldingRangeOptions.d.ts'
import type { WorkDoneProgressOptions } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressOptions.d.ts'
export class FoldingRangeRegistrationOptions extends FoldingRangeOptions {
    static create(): FoldingRangeOptions;
    static create(paramdocumentSelector: Object[]): FoldingRangeRegistrationOptions;
    static create(): WorkDoneProgressOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getDocumentSelector(): Object[];
    getId(): string;
    hashCode(): number;
    setDocumentSelector(documentSelector: Object[]): FoldingRangeRegistrationOptions;
    setId(id: string): FoldingRangeRegistrationOptions;
}