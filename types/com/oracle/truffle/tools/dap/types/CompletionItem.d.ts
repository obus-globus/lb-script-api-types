import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class CompletionItem extends JSONBase {
    static create(paramlabel: string): CompletionItem;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getLabel(): string;
    getLength(): number;
    getSelectionLength(): number;
    getSelectionStart(): number;
    getSortText(): string;
    getStart(): number;
    getText(): string;
    getType(): string;
    hashCode(): number;
    setLabel(label: string): CompletionItem;
    setLength(length: number): CompletionItem;
    setSelectionLength(selectionLength: number): CompletionItem;
    setSelectionStart(selectionStart: number): CompletionItem;
    setSortText(sortText: string): CompletionItem;
    setStart(start: number): CompletionItem;
    setText(text: string): CompletionItem;
    setType(type: string): CompletionItem;
}