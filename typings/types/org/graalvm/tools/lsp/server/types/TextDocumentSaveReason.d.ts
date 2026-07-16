import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TextDocumentSaveReason extends Enum<TextDocumentSaveReason> {
    static AfterDelay: TextDocumentSaveReason;
    static FocusOut: TextDocumentSaveReason;
    static Manual: TextDocumentSaveReason;
    static get(paramintValue: number): TextDocumentSaveReason;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TextDocumentSaveReason;
    static values(): TextDocumentSaveReason[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Manual" | "AfterDelay" | "FocusOut";
}