import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class FormattingOptions extends JSONBase {
    static create(paramtabSize: number, paraminsertSpaces: boolean): FormattingOptions;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    get(key: string): Object;
    getInsertFinalNewline(): boolean;
    getTabSize(): number;
    getTrimFinalNewlines(): boolean;
    getTrimTrailingWhitespace(): boolean;
    hashCode(): number;
    isInsertSpaces(): boolean;
    set(key: string, value: Object): FormattingOptions;
    setInsertFinalNewline(insertFinalNewline: boolean): FormattingOptions;
    setInsertSpaces(insertSpaces: boolean): FormattingOptions;
    setTabSize(tabSize: number): FormattingOptions;
    setTrimFinalNewlines(trimFinalNewlines: boolean): FormattingOptions;
    setTrimTrailingWhitespace(trimTrailingWhitespace: boolean): FormattingOptions;
}