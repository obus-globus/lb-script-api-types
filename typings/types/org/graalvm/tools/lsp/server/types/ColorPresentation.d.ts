import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
import type { TextEdit } from '../../../../../../org/graalvm/tools/lsp/server/types/TextEdit.d.ts'
export class ColorPresentation extends JSONBase {
    static create(paramlabel: string, paramtextEdit: TextEdit, paramadditionalTextEdits: TextEdit[]): ColorPresentation;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAdditionalTextEdits(): TextEdit[];
    getLabel(): string;
    getTextEdit(): TextEdit;
    hashCode(): number;
    setAdditionalTextEdits(additionalTextEdits: TextEdit[]): ColorPresentation;
    setLabel(label: string): ColorPresentation;
    setTextEdit(textEdit: TextEdit): ColorPresentation;
}