import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TextDocumentSyncKind extends Enum<TextDocumentSyncKind> {
    static Full: TextDocumentSyncKind;
    static Incremental: TextDocumentSyncKind;
    static None: TextDocumentSyncKind;
    static get(paramintValue: number): TextDocumentSyncKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TextDocumentSyncKind;
    static values(): TextDocumentSyncKind[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "None" | "Full" | "Incremental";
}