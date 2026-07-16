import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TextDocumentSaveReason extends Enum<TextDocumentSaveReason> {
    static AfterDelay: TextDocumentSaveReason;
    static FocusOut: TextDocumentSaveReason;
    static Manual: TextDocumentSaveReason;
    static get(paramintValue: number): TextDocumentSaveReason;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TextDocumentSaveReason;
    static values(): TextDocumentSaveReason[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Manual" | "AfterDelay" | "FocusOut";
}